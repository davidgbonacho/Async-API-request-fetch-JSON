<?php

/**
 * PHP as a service - retreiving data as JSON
 * @author Tizedit - David G. bonacho
 */

// retreive params (they come as JSON)
//$json_data = file_get_contents("php://input");
//$params = json_decode($json_data, true);

// your code here
$params[0]["titulo"] = 'test0';
$params[0]["texto"] = 'test0';
$params[1]["titulo"] = 'test1';
$params[1]["texto"] = 'test1';

// your response
$response = $params;

// convert to JSON
$encoded = json_encode($response, JSON_PRETTY_PRINT); // , JSON_FORCE_OBJECT   , JSON_PRETTY_PRINT
header('Content-type: application/json');

exit($encoded);
