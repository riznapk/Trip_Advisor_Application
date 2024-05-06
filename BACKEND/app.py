from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
from package import Package
from accommodation import Accommodation
from calculaterentbydays import CalculateRentByDays
from calculaterentbyhours import CalculateRentByHours
from rentcontext import RentContext
from tourseasonselection import TourSeasonSelection
from highseasontour import HighSeasonTour
from lowseasontour import LowSeasonTour
from shoulderseasontour import ShoulderSeasonTour

app = Flask(__name__)

client = MongoClient('mongodb+srv://darkPhoenix:GxbhrDuE6zQ7o0c0@cluster0.eubpgqd.mongodb.net')

# db connection
db = client['travel-advisor-management']

CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


# APIs to post, fetch information regarding users
@app.route('/users', methods=['POST', 'GET'])
def data():
    # POST a single user data to database
    if request.method == 'POST':
        body = request.json
        userID = body['userID']
        userFirstName = body['userFirstName']
        userLastName = body['userLastName']
        userEmail = body['userEmail']
        userPassword = body['userPassword']
        userPhoneNumber = body['userPhoneNumber']
        userProfile = body['userProfile']
        if db['users'].find_one({"userEmail": userEmail}):
            return jsonify({
                'status': 'User already exists!',
                'message': "failure"
            })
        else:
            # If user does not exist, insert new user into the database
            db['users'].insert_one({
                "userID": userID,
                "userFirstName": userFirstName,
                "userLastName": userLastName,
                "userEmail": userEmail,
                "userPassword": userPassword,
                "userPhoneNumber": userPhoneNumber,
                "userProfile": userProfile,
            })
            return jsonify({
                'status': 'User Data is posted to MongoDB!',
                'message': "success"
            })

    # GET all user data from database
    if request.method == 'GET':
        allData = db['users'].find()
        dataJson = []
        for data in allData:
            userID = data['userID']
            userFirstName = data['userFirstName']
            userLastName = data['userLastName']
            userEmail = data['userEmail']
            userPassword = data['userPassword']
            userPhoneNumber = data['userPhoneNumber']
            userProfile = data['userProfile']
            dataDict = {
                'userID': userID,
                'userFirstName': userFirstName,
                'userLastName': userLastName,
                'userEmail': userEmail,
                'userPassword': userPassword,
                'userPhoneNumber': userPhoneNumber,
                'userProfile': userProfile,
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)


# get details of specific user
@app.route('/users/<string:userEmail>', methods=['GET', 'DELETE', 'PUT'])
def getUserDetails(userEmail):
    # GET a specific data by userID
    if request.method == 'GET':
        data = db['users'].find_one({'userEmail': userEmail})
        if data is None:
            return jsonify({'error': 'User not found.'}), 404

        userID = data['userID']
        userFirstName = data['userFirstName']
        userLastName = data['userLastName']
        userEmail = data['userEmail']
        userPassword = data['userPassword']
        userPhoneNumber = data['userPhoneNumber']
        userProfile = data['userProfile']
        dataDict = {
            'userID': userID,
            'userFirstName': userFirstName,
            'userLastName': userLastName,
            'userEmail': userEmail,
            'userPassword': userPassword,
            'userPhoneNumber': userPhoneNumber,
            'userProfile': userProfile,
        }
        print(dataDict)
        return jsonify(dataDict), 200


@app.route('/users/signin', methods=['POST'])
def signin():
    body = request.json
    userEmail = body['userEmail']
    userPassword = body['userPassword']
    user = db['users'].find_one({"userEmail": userEmail})
    if user is None:
        return jsonify({'error': 'User not found.'}), 404
    if user and user['userPassword'] == userPassword:
        return jsonify({
            'status': 'User authenticated successfully!',
            'message': "success"
        }), 200
    else:
        return jsonify({
            'status': 'Invalid email or password!',
            'message': "failure"
        }), 401


# APIs to fetch, delete, post, update information regarding travel packages
@app.route('/packageDetails', methods=['POST', 'GET', 'PUT', 'DELETE'])
def addPackageInfo():
    # POST a data to database
    if request.method == 'POST':
        body = request.json
        packageID = body['packageID']
        packageName = body['packageName']
        packageDestination = body['packageDestination']
        packageDuration = body['packageDuration']
        packageDurationType = body['packageDurationType']
        packageDescription = body['packageDescription']
        packagePrice = body['packagePrice']
        packageImage = body['packageImage']
        packageTransportDetails = body['packageTransportDetails']
        packageTransportType = packageTransportDetails['transportType']
        packageAccommodationDetails = body['packageAccommodationDetails']
        packageTourDetails = body['packageTourDetails']
        peopleCount = body['peopleCount']

        #  GoF factory method pattern-----------------------------------------------------------
        package = Package()
        transport_factory = package.get_transport_info()
        transportation_info_obj = transport_factory.get_transport_details(packageTransportType)

        if transportation_info_obj is not None:
            transportation_info_obj.set_travel_id(packageTransportDetails['transportID'])
            transportation_info_obj.set_travel_type(packageTransportDetails['transportType'])

        if transportation_info_obj.get_travel_type().lower() == "flight":
            transportation_info_obj.set_ticket_price(packageTransportDetails['ticketPrice'])
            count = packageTransportDetails['ticketCount']
            totalPrice = transportation_info_obj.get_total_price(count)
            transportation_info_obj.set_travel_price(totalPrice)


        elif transportation_info_obj.get_travel_type().lower() == "car":
            transportation_info_obj.set_rental_price(packageTransportDetails['rentalPrice'])
            day_count = packageTransportDetails['dayCount']
            car_count = packageTransportDetails['carCount']
            totalPrice = transportation_info_obj.get_total_price(car_count, day_count)
            transportation_info_obj.set_travel_price(totalPrice)

        elif transportation_info_obj.get_travel_type().lower() == "rail":
            transportation_info_obj.set_ticket_price(packageTransportDetails['ticketPrice'])
            count = packageTransportDetails['ticketCount']
            totalPrice = transportation_info_obj.get_total_price(count)
            transportation_info_obj.set_travel_price(totalPrice)

        #  -----------------------------------------------------------------------------------------

        #  GoF Strategy pattern --------------------------------------------------------------------

        acc_id = packageAccommodationDetails['accID']
        acc_name = packageAccommodationDetails['accName']
        acc_type = packageAccommodationDetails['accType']
        acc_price = packageAccommodationDetails['accPrice']
        acc_duration = packageAccommodationDetails['accDuration']
        acc_duration_type = packageAccommodationDetails['accDurationType']
        acc_image = packageAccommodationDetails['accImage']
        package.set_accommodation_info(acc_id, acc_name, acc_type, acc_price, acc_duration, acc_image)  # composition
        accommodation = Accommodation()
        accommodation.set_acc_id(acc_id)
        accommodation.set_acc_name(acc_name)
        accommodation.set_acc_type(acc_type)
        accommodation.set_acc_price(acc_price)
        accommodation.set_acc_duration(acc_duration)
        accommodation.set_acc_image(acc_image)
        if acc_duration_type == "hourly":
            hourlyCalculation = CalculateRentByHours()
            rentcontext = RentContext(hourlyCalculation)
            total_pay = rentcontext.execute_rent_calculation(accommodation)
            accommodation.set_acc_price(total_pay)
        elif acc_duration_type == "daily":
            dailyCalculation = CalculateRentByDays()
            rentcontext = RentContext(dailyCalculation)
            total_pay = rentcontext.execute_rent_calculation(accommodation)
            accommodation.set_acc_price(total_pay)
        else:
            print("Invalid accommodation duration type")
            total_pay = 0
            accommodation.set_acc_price(total_pay)

        # --------------------------------------------------------------------------------------
        # GoF Facade pattern -------------------------------------------------------------------

        tour_season_selection = TourSeasonSelection()
        tourID = packageTourDetails['tourID']
        tourName = packageTourDetails['tourName']
        tourDestination = packageTourDetails['tourDestination']
        tourDescription = packageTourDetails['tourDescription']
        tourPrice = packageTourDetails['tourPrice']
        tourImage = packageTourDetails['tourImage']
        tourGuide = packageTourDetails['tourGuide']
        tourAvailability = packageTourDetails['tourAvailability']
        tourSeason = packageTourDetails['tourSeason']

        if tourSeason.lower() == "high":
            package.set_tour_info(tourID, tourName, tourDestination, tourDescription, tourPrice, tourSeason, tourImage,
                                  tourGuide, tourAvailability)
            season_type = HighSeasonTour()
            season_type.set_tour_id(tourID)
            season_type.set_tour_name(tourName)
            season_type.set_tour_destination(tourDestination)
            season_type.set_tour_description(tourDescription)
            season_type.set_tour_price(tourPrice)
            season_type.set_tour_image(tourImage)
            season_type.set_tour_season(tourSeason)
            season_type.set_tour_guide(tourGuide)
            season_type.set_tour_availability(tourAvailability)

            total_tour_price = tour_season_selection.high_season_selection(peopleCount, tourPrice)
            season_type.set_tour_price(total_tour_price)

        elif tourSeason.lower() == "shoulder":
            package.set_tour_info(tourID, tourName, tourDestination, tourDescription, tourPrice, tourSeason, tourImage,
                                  tourGuide, tourAvailability)
            season_type = ShoulderSeasonTour()
            season_type.set_tour_id(tourID)
            season_type.set_tour_name(tourName)
            season_type.set_tour_destination(tourDestination)
            season_type.set_tour_description(tourDescription)
            season_type.set_tour_price(tourPrice)
            season_type.set_tour_image(tourImage)
            season_type.set_tour_season(tourSeason)
            season_type.set_tour_guide(tourGuide)
            season_type.set_tour_availability(tourAvailability)

            total_tour_price = tour_season_selection.high_season_selection(peopleCount, tourPrice)
            season_type.set_tour_price(total_tour_price)

        elif tourSeason.lower() == "low":
            package.set_tour_info(tourID, tourName, tourDestination, tourDescription, tourPrice, tourSeason, tourImage,
                                  tourGuide, tourAvailability)
            season_type = LowSeasonTour()
            season_type.set_tour_id(tourID)
            season_type.set_tour_name(tourName)
            season_type.set_tour_destination(tourDestination)
            season_type.set_tour_description(tourDescription)
            season_type.set_tour_price(tourPrice)
            season_type.set_tour_image(tourImage)
            season_type.set_tour_season(tourSeason)
            season_type.set_tour_guide(tourGuide)
            season_type.set_tour_availability(tourAvailability)

            total_tour_price = tour_season_selection.high_season_selection(peopleCount, tourPrice)
            season_type.set_tour_price(total_tour_price)

        else:
            print("Invalid season type")
            total_tour_price = 0
            accommodation.set_acc_price(total_tour_price)

        # --------------------------------------------------------------------------------------

        # Calculating the package price
        packagePriceTemp = accommodation.get_acc_price() + transportation_info_obj.get_travel_price()
        calculatedPackagePrice = packagePriceTemp + season_type.get_tour_price()
        package.set_package_price(calculatedPackagePrice)

        # --------------------------------------------------------------------------------------

        db['packageDetails'].insert_one({
            "packageID": packageID,
            "packageName": packageName,
            "packageDuration": packageDuration,
            "packageDescription": packageDescription,
            "packageDestination": packageDestination,
            "packagePrice": calculatedPackagePrice,
            "packageImage": packageImage,
            "packageDurationType": packageDurationType,
            "peopleCount": peopleCount,
            "packageTransportDetails": {
                "transportID": transportation_info_obj.get_travel_id(),
                "transportType": transportation_info_obj.get_travel_type(),
                "transportPrice": transportation_info_obj.get_travel_price(),
            },
            "packageAccommodationDetails": {
                "accID": accommodation.get_acc_id(),
                "accName": accommodation.get_acc_name(),
                "accType": accommodation.get_acc_type(),
                "accPrice": accommodation.get_acc_price(),
                "accDuration": accommodation.get_acc_duration(),
                "accDurationType": packageAccommodationDetails['accDurationType'],
                "accImage": accommodation.get_acc_image(),
            },
            "packageTourDetails": {
                "tourID": season_type.get_tour_id(),
                "tourName": season_type.get_tour_name(),
                "tourDestination": season_type.get_tour_destination(),
                "tourDescription": season_type.get_tour_description(),
                "tourPrice": season_type.get_tour_price(),
                "tourSeason": season_type.get_tour_season(),
                "tourImage": season_type.get_tour_image(),
                "tourGuide": season_type.get_tour_guide(),
                "tourAvailability": season_type.get_tour_availability(),
            }
        })
        return jsonify({
            'status': 'Package information is posted to MongoDB!',
            'message': 'success'
        })

    # GET all user data from database
    if request.method == 'GET':
        allPackageData = db['packageDetails'].find()
        dataJson = []
        for data in allPackageData:
            packageID = data['packageID']
            packageName = data['packageName']
            packageDestination = data['packageDestination']
            packageDuration = data['packageDuration']
            packageDescription = data['packageDescription']
            packagePrice = data['packagePrice']
            packageImage = data['packageImage']
            packageTransportDetails = data['packageTransportDetails']
            packageAccommodationDetails = data['packageAccommodationDetails']
            packageTourDetails = data['packageTourDetails']
            packageDurationType = data['packageDurationType']
            peopleCount = data['peopleCount']
            dataDict = {
                "packageID": packageID,
                "packageName": packageName,
                "packageDuration": packageDuration,
                "packageDescription": packageDescription,
                "packageDestination": packageDestination,
                "packagePrice": packagePrice,
                "packageImage": packageImage,
                "peopleCount": peopleCount,
                "packageDurationType": packageDurationType,
                "packageTransportDetails": packageTransportDetails,
                "packageAccommodationDetails": packageAccommodationDetails,
                "packageTourDetails": packageTourDetails,
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)

    # UPDATE a single package information by packageID
    if request.method == 'PUT':
        try:
            body = request.json
            packageID = body['packageID']
            packageName = body['packageName']
            packageDestination = body['packageDestination']
            packageDuration = body['packageDuration']
            packageDescription = body['packageDescription']
            packagePrice = body['packagePrice']
            packageImage = body['packageImage']
            packageTransportDetails = body['packageTransportDetails']
            packageAccommodationDetails = body['packageAccommodationDetails']
            packageTourDetails = body['packageTourDetails']
            peopleCount = body['peopleCount']

        except KeyError:
            return jsonify({'status': 'Bad Request', 'message': 'Missing required field(s)'}), 400

        result = db['packageDetails'].update_one(
            {'packageID': packageID},
            {
                "$set": {
                    "packageID": packageID,
                    "packageName": packageName,
                    "packageDuration": packageDuration,
                    "packageDescription": packageDescription,
                    "packageDestination": packageDestination,
                    "packagePrice": packagePrice,
                    "packageImage": packageImage,
                    "peopleCount": peopleCount,
                    "packageTransportDetails": packageTransportDetails,
                    "packageAccommodationDetails": packageAccommodationDetails,
                    "packageTourDetails": packageTourDetails,
                }
            }
        )

        if result.modified_count == 0:
            return jsonify({'status': 'Not Found', 'message': 'Tour package with ID ' + packageID + ' not found'}), 404

        print('\n # Update on package details is successful # \n')
        return jsonify({'status': 'Package data with ID: ' + packageID + ' is updated!', 'message': 'success'})

    # DELETE a particular package details from the database
    if request.method == 'DELETE':
        try:
            body = request.json
            packageID = body['packageID']
        except KeyError:
            return jsonify({'status': 'Bad Request', 'message': 'Missing required field(s)'}), 400
        result = db['packageDetails'].delete_many({'packageID': packageID})
        if result.deleted_count == 0:
            return jsonify({'status': 'Not Found', 'message': 'Tour package with ID ' + packageID + ' not found'}), 404
        print('\n # Deletion successful # \n')
        return jsonify({'status': 'Tour Package with id: ' + packageID + ' is deleted!',
                        'message': 'success'
                        }
                       )


# APIs to fetch, delete, post, update information regarding tour packages
@app.route('/tourDetails', methods=['POST', 'GET', 'PUT', 'DELETE'])
def addTourInfo():
    if request.method == 'POST':
        body = request.json
        tourID = body['tourID']
        tourName = body['tourName']
        tourDestination = body['tourDestination']
        tourDescription = body['tourDescription']
        tourPrice = body['tourPrice']
        tourImage = body['tourImage']
        tourGuide = body['tourGuide']
        tourAvailability = body['tourAvailability']
        tourSeason = body['tourSeason']
        db['tourDetails'].insert_one({
            "tourID": tourID,
            "tourName": tourName,
            "tourDestination": tourDestination,
            "tourDescription": tourDescription,
            "tourPrice": tourPrice,
            "tourImage": tourImage,
            "tourGuide": tourGuide,
            "tourAvailability": tourAvailability,
            "tourSeason": tourSeason,
        })
        return jsonify({
            'status': 'Tour Data is posted to MongoDB!',
            'message': "success"
        })

    # GET all tour data from database
    if request.method == 'GET':
        allPackageData = db['tourDetails'].find()
        dataJson = []
        for data in allPackageData:
            tourID = data['tourID']
            tourName = data['tourName']
            tourDestination = data['tourDestination']
            tourDescription = data['tourDescription']
            tourPrice = data['tourPrice']
            tourImage = data['tourImage']
            tourGuide = data['tourGuide']
            tourAvailability = data['tourAvailability']
            tourSeason = data['tourSeason']
            dataDict = {
                "tourID": tourID,
                "tourName": tourName,
                "tourDestination": tourDestination,
                "tourDescription": tourDescription,
                "tourPrice": tourPrice,
                "tourImage": tourImage,
                "tourGuide": tourGuide,
                "tourAvailability": tourAvailability,
                "tourSeason": tourSeason,
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)


if __name__ == '__main__':
    app.debug = True
    app.run()
