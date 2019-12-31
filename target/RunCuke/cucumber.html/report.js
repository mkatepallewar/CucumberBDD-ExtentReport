$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search-many.feature");
formatter.feature({
  "line": 1,
  "name": "Searching on google",
  "description": "",
  "id": "searching-on-google",
  "keyword": "Feature"
});
formatter.before({
  "duration": 39833007,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Direct search on Google firefox",
  "description": "",
  "id": "searching-on-google;direct-search-on-google-firefox",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Launch browser \"firefox\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigate to \"http://google.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters search term \"Way2Automation selenium\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "GoogleSteps.launch_browser(String)"
});
formatter.result({
  "duration": 7011921612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com",
      "offset": 18
    }
  ],
  "location": "GoogleSteps.user_navigate_to(String)"
});
formatter.result({
  "duration": 1246758727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Way2Automation selenium",
      "offset": 25
    }
  ],
  "location": "GoogleSteps.user_enters_search_term(String)"
});
formatter.result({
  "duration": 1113917111,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.click_on_search_button()"
});
formatter.result({
  "duration": 14619926613,
  "status": "passed"
});
formatter.after({
  "duration": 7808850264,
  "status": "passed"
});
formatter.before({
  "duration": 280580,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Direct search on Google chrome",
  "description": "",
  "id": "searching-on-google;direct-search-on-google-chrome",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Launch browser \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User navigate to \"http://google.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters search term \"Way2Automation\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "GoogleSteps.launch_browser(String)"
});
formatter.result({
  "duration": 4093796550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com",
      "offset": 18
    }
  ],
  "location": "GoogleSteps.user_navigate_to(String)"
});
formatter.result({
  "duration": 2635554657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Way2Automation",
      "offset": 25
    }
  ],
  "location": "GoogleSteps.user_enters_search_term(String)"
});
formatter.result({
  "duration": 1095201767,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.click_on_search_button()"
});
formatter.result({
  "duration": 2118245455,
  "status": "passed"
});
formatter.after({
  "duration": 799456650,
  "status": "passed"
});
formatter.uri("search-outline.feature");
formatter.feature({
  "line": 1,
  "name": "Searching on google using sceanrio outline",
  "description": "",
  "id": "searching-on-google-using-sceanrio-outline",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Direct search on Google firefox",
  "description": "",
  "id": "searching-on-google-using-sceanrio-outline;direct-search-on-google-firefox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch browser \"\u003cbrowserName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigate to \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters search term \"\u003csearch\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on search button",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "searching-on-google-using-sceanrio-outline;direct-search-on-google-firefox;",
  "rows": [
    {
      "cells": [
        "browserName",
        "url",
        "search"
      ],
      "line": 9,
      "id": "searching-on-google-using-sceanrio-outline;direct-search-on-google-firefox;;1"
    },
    {
      "cells": [
        "chrome",
        "http://google.com",
        "Way2Automation"
      ],
      "line": 10,
      "id": "searching-on-google-using-sceanrio-outline;direct-search-on-google-firefox;;2"
    },
    {
      "cells": [
        "firefox",
        "http://google.com",
        "Way2Automation selenium"
      ],
      "line": 11,
      "id": "searching-on-google-using-sceanrio-outline;direct-search-on-google-firefox;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 366840,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Direct search on Google firefox",
  "description": "",
  "id": "searching-on-google-using-sceanrio-outline;direct-search-on-google-firefox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch browser \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigate to \"http://google.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters search term \"Way2Automation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "GoogleSteps.launch_browser(String)"
});
formatter.result({
  "duration": 3457335691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com",
      "offset": 18
    }
  ],
  "location": "GoogleSteps.user_navigate_to(String)"
});
formatter.result({
  "duration": 733065059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Way2Automation",
      "offset": 25
    }
  ],
  "location": "GoogleSteps.user_enters_search_term(String)"
});
formatter.result({
  "duration": 1112213229,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.click_on_search_button()"
});
formatter.result({
  "duration": 980217062,
  "status": "passed"
});
formatter.after({
  "duration": 873072350,
  "status": "passed"
});
formatter.before({
  "duration": 291710,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Direct search on Google firefox",
  "description": "",
  "id": "searching-on-google-using-sceanrio-outline;direct-search-on-google-firefox;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch browser \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigate to \"http://google.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters search term \"Way2Automation selenium\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "GoogleSteps.launch_browser(String)"
});
formatter.result({
  "duration": 5769801025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com",
      "offset": 18
    }
  ],
  "location": "GoogleSteps.user_navigate_to(String)"
});
formatter.result({
  "duration": 893556041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Way2Automation selenium",
      "offset": 25
    }
  ],
  "location": "GoogleSteps.user_enters_search_term(String)"
});
formatter.result({
  "duration": 1103754570,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.click_on_search_button()"
});
formatter.result({
  "duration": 3314626955,
  "status": "passed"
});
formatter.after({
  "duration": 9762451235,
  "status": "passed"
});
});