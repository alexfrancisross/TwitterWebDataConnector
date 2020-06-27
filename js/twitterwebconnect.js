(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var statusCols = [{
            id: "status_id",
            alias: "status_id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "id_str",
            alias: "id_str",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "full_text",
            alias: "full_text",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "source",
            alias: "source",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "created_at",
            alias: "created_at",
            dataType: tableau.dataTypeEnum.datetime
        }, {
            id: "contributors",
            alias: "contributors",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "coordinates",
            alias: "coordinates",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "favorite_count",
            alias: "favorite_count",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "favorited",
            alias: "favorited",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "geo",
            alias: "geo",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "in_reply_to_screen_name",
            alias: "in_reply_to_screen_name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "in_reply_to_status_id",
            alias: "in_reply_to_status_id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "in_reply_to_status_id_str",
            alias: "in_reply_to_status_id_str",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "in_reply_to_id",
            alias: "in_reply_to_id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "in_reply_to_id_str",
            alias: "in_reply_to_id_str",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "is_quote_status",
            alias: "is_quote_status",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "lang",
            alias: "lang",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "retweet_count",
            alias: "retweet_count",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "retweeted",
            alias: "retweeted",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "truncated",
            alias: "truncated",
            dataType: tableau.dataTypeEnum.bool
        }];
        var userCols = [{
            id: "status_id",
            alias: "status_id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Contributors_Enabled",
            alias: "Contributors_Enabled",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Created_At",
            alias: "Created_At",
            dataType: tableau.dataTypeEnum.datetime
        }, {
            id: "Default_Profile",
            alias: "Default_Profile",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Default_Profile_Image",
            alias: "Default_Profile_Image",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Description",
            alias: "Description",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Favourites_Count",
            alias: "Favourites_Count",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Follow_Request_Sent",
            alias: "Follow_Request_Sent",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Followers_Count",
            alias: "Followers_Count",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Following",
            alias: "Following",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Friends_Count",
            alias: "Friends_Count",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Geo_Enabled",
            alias: "Geo_Enabled",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Has_Extended_Profile",
            alias: "Has_Extended_Profile",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Id",
            alias: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "id_str",
            alias: "id_str",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Is_Translation_Enabled",
            alias: "Is_Translation_Enabled",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Is_Translator",
            alias: "Is_Translator",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Lang",
            alias: "Lang",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Listed_Count",
            alias: "Listed_Count",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Location",
            alias: "Location",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Name",
            alias: "Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Notifications",
            alias: "Notifications",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Profile_Background_Image_Url",
            alias: "Profile_Background_Image_Url",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Profile_Banner_Url",
            alias: "Profile_Banner_Url",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Profile_Image_Url",
            alias: "Profile_Image_Url",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Protected",
            alias: "Protected",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "Screen_Name",
            alias: "Screen_Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Statuses_Count",
            alias: "Statuses_Count",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Time_Zone",
            alias: "Time_Zone",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Translator_Type",
            alias: "Translator_Type",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Url",
            alias: "Url",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Utc_Offset",
            alias: "Utc_Offset",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Verified",
            alias: "Verified",
            dataType: tableau.dataTypeEnum.bool
        }];
        var hashtagCols = [{
            id: "status_id",
            alias: "status_id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "text",
            alias: "text",
            dataType: tableau.dataTypeEnum.string
        }];
        var urlCols = [{
            id: "status_id",
            alias: "status_id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "url",
            alias: "url",
            dataType: tableau.dataTypeEnum.string
        }];


        var statusSchema = {
            id: "statuses",
            alias: "statuses",
            columns: statusCols
        };

        var userSchema = {
            id: "users",
            alias: "users",
            columns: userCols
        };
        var hashtagSchema = {
            id: "hashtags",
            alias: "hashtags",
            columns: hashtagCols
        };
        var urlSchema = {
            id: "urls",
            alias: "urls",
            columns: urlCols
        };


        schemaCallback([statusSchema, userSchema, hashtagSchema, urlSchema]);
    };

    //Format Twitter Source Field To Get Just The Name Of The Source
    function getSource(source) {
        if (source) {
            var formattedSource = source.split('<')[1].split('>')[1];
            return formattedSource;
        } else {
            return "";
        }
    }

    // Download the data
    myConnector.getData = function(table, doneCallback) {

        var counter = 0;
        var next_results = '?q=' + encodeURIComponent(tableau.connectionData) + '&count=100&result_type=recent&include_entities=1';
        getTwitterData = function(counter, next_results) {
            var url = '../twitterwebconnect.php' + next_results;
            $.ajax({
                url: url,
                dataType: 'json',
                type: 'GET',
                success: function(resp) {
                    if (resp.errors) {
                        tableau.log("Error: " + resp.errors[0].message + ". Code: " + resp.errors[0].code);
                        tableau.abortWithError("Error: " + resp.errors[0].message + ". Code: " + resp.errors[0].code);
                    }


                    var statuses = resp.statuses;
                    var tableData = [];

                    // Iterate over the JSON object
                    for (var i = 0, len = statuses.length; i < len; i++) {
                        if (table.tableInfo.id == "statuses") {
                            tableData.push({
                                "status_id": statuses[i].id,
                                "id_str": statuses[i].id_str,
                                "full_text": statuses[i].full_text,
                                "source": getSource(statuses[i].source),
                                "created_at": new Date(statuses[i].created_at),
                                "contributors": statuses[i].contributors,
                                "coordinates": statuses[i].coordinates,
                                "favorite_count": statuses[i].favorite_count,
                                "favorited": statuses[i].favorited,
                                "geo": statuses[i].geo,
                                "in_reply_to_screen_name": statuses[i].in_reply_to_screen_name,
                                "in_reply_to_status_id": statuses[i].in_reply_to_status_id,
                                "in_reply_to_status_id_str": statuses[i].in_reply_to_status_id_str,
                                "in_reply_to_id": statuses[i].in_reply_to_id,
                                "in_reply_to_id_str": statuses[i].in_reply_to_id_str,
                                "is_quote_status": statuses[i].is_quote_status,
                                "lang": statuses[i].lang,
                                "retweet_count": statuses[i].retweet_count,
                                "retweeted": statuses[i].retweeted,
                                "truncated": statuses[i].truncated
                            });
                        }
                        if (table.tableInfo.id == "users") {
                            tableData.push({
                                "status_id": statuses[i].id,
                                "Contributors_Enabled": statuses[i].user.contributors_enabled,
                                "Created_At": new Date(statuses[i].user.created_at),
                                "Default_Profile": statuses[i].user.default_profile,
                                "Default_Profile_Image": statuses[i].user.default_profile_image,
                                "Description": statuses[i].user.description,
                                "Favourites_Count": statuses[i].user.favourites_count,
                                "Follow_Request_Sent": statuses[i].user.follow_request_sent,
                                "Followers_Count": statuses[i].user.followers_count,
                                "Following": statuses[i].user.following,
                                "Friends_Count": statuses[i].user.friends_count,
                                "Geo_Enabled": statuses[i].user.geo_enabled,
                                "Has_Extended_Profile": statuses[i].user.has_extended_profile,
                                "id": statuses[i].user.id,
                                "id_str": statuses[i].user.id_str,
                                "Is_Translation_Enabled": statuses[i].user.is_translation_enabled,
                                "Is_Translator": statuses[i].user.is_translator,
                                "Lang": statuses[i].user.lang,
                                "Listed_Count": statuses[i].user.listed_count,
                                "Location": statuses[i].user.location,
                                "Name": statuses[i].user.name,
                                "Notifications": statuses[i].user.notifications,
                                "Profile_Background_Image_Url": statuses[i].user.profile_background_image_url,
                                "Profile_Banner_Url": statuses[i].user.profile_banner_url,
                                "Profile_Image_Url": statuses[i].user.profile_image_url,
                                "Protected": statuses[i].user.protected,
                                "Screen_Name": statuses[i].user.screen_name,
                                "Statuses_Count": statuses[i].user.statuses_count,
                                "Time_Zone": statuses[i].user.time_zone,
                                "Translator_Type": statuses[i].user.translator_type,
                                "Url": statuses[i].user.url,
                                "Utc_Offset": statuses[i].user.utc_offset,
                                "Verified": statuses[i].user.verified
                            });
                        }
                        if (table.tableInfo.id == "hashtags") {
                            for (var x = 0, hashlen = statuses[i].entities.hashtags.length; x < hashlen; x++) {
                                tableData.push({
                                    "status_id": statuses[i].id,
                                    "text": statuses[i].entities.hashtags[x].text
                                });
                            }
                        }
                        if (table.tableInfo.id == "urls") {
                            for (var z = 0, urllen = statuses[i].entities.urls.length; z < urllen; z++) {
                                tableData.push({
                                    "status_id": statuses[i].id,
                                    "url": statuses[i].entities.urls[z].url
                                });
                            }
                        }
                    }
                    next_results = resp.search_metadata.next_results
                    counter++;
                    table.appendRows(tableData);
                    if (counter == 50 || !next_results) { //if 5k results or no more then we're done
                        //if (counter == 10) {
                        doneCallback();
                    } else {
                        getTwitterData(counter, next_results);
                    }

                },
                error: function(xhr, status, error) {
                    tableau.log("Error: " + xhr.status + " " + error);
                    tableau.abortWithError("Error: " + xhr.status + " " + error);
                }
            });
        };
        getTwitterData(counter, next_results);
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            if (document.getElementById("searchTerm").value) {
                tableau.connectionName = "Twitter Web Data Connector"; // This will be the data source name in Tableau
                tableau.connectionData = document.getElementById("searchTerm").value;
                tableau.submit(); // This sends the connector object to Tableau
            }
        });
    });
})();