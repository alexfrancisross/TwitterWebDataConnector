<?php
/*********************************************************************************************************/
/** Twitter Web Connector										**/										**/
/** Manages Oauth Authentication To Twitter Search API 							**/
/** Author Alex Ross 											**/										**/
/** Version 1.0                               								**/							**/
/*********************************************************************************************************/
require_once("TwitterAPIExchange.php");

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    "oauth_access_token" => "ENTER YOUR OAUTH ACCESS TOKEN",
    "oauth_access_token_secret" => "ENTER YOUR OAUTH ACCESS TOKEN SECRET",
    "consumer_key" => "ENTER YOUR CONSUMER KEY",
    "consumer_secret" => "ENTER YOUR CONSUMER SECRET"
);
 
$url = "https://api.twitter.com/1.1/search/tweets.json";

/** Get Search Term From Query String **/
if (isset($_GET['q'])) {
    $q = $_GET['q'];
}else{
    // Fallback behaviour goes here
	$q="@tableau";
}

/** Get max_id From Query String **/
if (isset($_GET['max_id'])) {
    $max_id = $_GET['max_id'];
}else{
    // Fallback behaviour goes here
	$max_id="";
}

/** Get Count From Query String **/
if (isset($_GET['count'])) {
    $count = $_GET['count'];
}else{
    // Fallback behaviour goes here
	$count="100";
}

/** Get result_type From Query String **/
if (isset($_GET['result_type'])) {
    $result_type = $_GET['result_type'];
}else{
    // Fallback behaviour goes here
	$result_type="recent";
}

/** Get include_entities From Query String **/
if (isset($_GET['include_entities'])) {
    $include_entities = $_GET['include_entities'];
}else{
    // Fallback behaviour goes here
	$include_entities="1";
}
 
 /** Get Request From Twitter Search API **/
$requestMethod = "GET";
$getfield = "?q=" . urlencode($q) . "&count=" . $count . "&result_type=" . $result_type . "&max_id=" . $max_id . "&include_entities=" . $include_entities;
$twitter = new TwitterAPIExchange($settings);
$json= $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
			 
echo $json;
?>
