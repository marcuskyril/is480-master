const ADD_CLIMBER_URL = "http://office.livestudios.com:41111/backend/api/add_climber.php";
const REGISTER_PARTICIPANT_URL = "http://office.livestudios.com:41111/backend/api/register_participant.php";
const START_EVENT_URL = "http://office.livestudios.com:41111/backend/api/start_event.php";
const STOP_EVENT_URL = "http://office.livestudios.com:41111/backend/api/stop_event.php";
const SET_CURRENT_DETAIL_URL = "http://office.livestudios.com:41111/backend/api/set_current_detail.php";
const GET_CURRENT_EVENT_URL = "http://office.livestudios.com:41111/backend/api/get_current_event.php";
const GET_CURRENT_DETAIL_URL = "http://office.livestudios.com:41111/backend/api/get_current_detail.php"
const GET_LAST_CLIMBER_ID_URL = "http://office.livestudios.com:41111/backend/api/get_last_climber_id.php";
const GET_ALL_RESULTS_URL = "http://office.livestudios.com:41111/backend/api/get_past_results.php";
const CLEAR_RESULTS_URL = "http://office.livestudios.com:41111/backend/api/clear_results_database.php";
const CLEAR_RESULTS_BY_CAT_URL = "http://office.livestudios.com:41111/backend/api/clear_completed_event_results.php";
const SET_MALE_URL = "http://office.livestudios.com:41111/backend/api/set_finals_male_climber.php";
const SET_FEMALE_URL = "http://office.livestudios.com:41111/backend/api/set_finals_female_climber.php";
const GET_FINALISTS_URL = "http://office.livestudios.com:41111/backend/api/getFinalists.php";
const GET_CURRENT_CLIMBERS_URL = "http://office.livestudios.com:41111/backend/api/get_finals_climbers.php";
const GET_CURRENT_FINAL_EVENT_URL = "http://office.livestudios.com:41111/backend/api/get_current_final_event.php";
const START_FINAL_EVENT_URL = "http://office.livestudios.com:41111/backend/api/start_final_event.php";
const STOP_FINAL_EVENT_URL = "http://office.livestudios.com:41111/backend/api/stop_final_event.php";


module.exports = {

    addClimber: function(climberID,first_name, last_name, gender, date_of_birth, id_number, nationality, organization) {

        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: ADD_CLIMBER_URL,
            data: {
                climberID, first_name, last_name, gender, date_of_birth, id_number, nationality, organization
            },
            success: function(response) {
                console.log("Add API", response);
            }
        });
    },

    retrieveClimbers: function(categoryID) {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")   ;
            },
            data: {categoryID},
            url: GET_FINALISTS_URL,
            data: {categoryID},
            success: function(response) {
                // console.log("name", response);
            }
        });
    },

    setMaleClimber: function(name) {

        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: SET_MALE_URL,
            data: {name},
            success: function(response) {
                console.log("name", response);
            }
        });
    },

    setFemaleClimber: function(name) {
        console.log("name", name);
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: SET_FEMALE_URL,
            data: {name},
            success: function(response) {
                console.log("name", response);
            }
        });
    },

    registerClimber: function(participantID, categoryID, detail) {

        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: REGISTER_PARTICIPANT_URL,
            data: {participantID, categoryID, detail},
            success: function(response) {
                console.log("Register API", response);
            }
        });
    },

    clearResults: function() {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: CLEAR_RESULTS_URL,
            success: function(response) {
                console.log(response);
            }
        });
    },

    clearResultsByCat: function(categoryID) {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            data: {categoryID},
            url: CLEAR_RESULTS_BY_CAT_URL,
            success: function(response) {
                console.log(response);
            }
        });
    },

    getLastCLimberID: function() {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: GET_LAST_CLIMBER_ID_URL,
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    },

    startFinalEvent: function(categoryID) {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: START_FINAL_EVENT_URL,
            data: {categoryID},
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    },

    startEvent: function(categoryID) {
        var data = {
            categoryID
        }

        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: START_EVENT_URL,
            data: data,
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    },

    endEvent: function() {

        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: STOP_EVENT_URL,
            success: function(response) {
                console.log("response", response);
            }
        });
    },

    endFinalEvent: function() {

        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: STOP_FINAL_EVENT_URL,
            success: function(response) {
                console.log("response", response);
            }
        });
    },

    setCurrentDetail: function(detail) {

        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            data: {detail},
            url: SET_CURRENT_DETAIL_URL,
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    },

    getCurrentEvent: function() {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: GET_CURRENT_EVENT_URL,
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    },

    getCurrentFinalEvent: function() {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: GET_CURRENT_FINAL_EVENT_URL,
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    },

    getCurrentDetail: function() {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: GET_CURRENT_DETAIL_URL,
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    },

    getCurrentClimbers: function() {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: GET_CURRENT_CLIMBERS_URL,
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    },

    getAllResults: function() {
        return $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            },
            url: GET_ALL_RESULTS_URL,
            success: function(response) {
                // console.log("Tres manifique, monsieur", response);
            }
        });
    }

}
