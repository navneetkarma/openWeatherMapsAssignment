$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CityValidation.feature");
formatter.feature({
  "line": 2,
  "name": "City Validation Feature",
  "description": "Validate the positive and negative test cases on the search of city",
  "id": "city-validation-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 159289,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Perform negative test case on the search of city",
  "description": "",
  "id": "city-validation-feature;perform-negative-test-case-on-the-search-of-city",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter invalid text in the city search box",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "validate that no record is found for invalid text",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 8243480962,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.enter_invalid_city()"
});
formatter.result({
  "duration": 140898377,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_search_btn()"
});
formatter.result({
  "duration": 3965104935,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.check_no_record()"
});
formatter.result({
  "duration": 195953153,
  "status": "passed"
});
formatter.after({
  "duration": 302080,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Perform postive test case where searched city coordinate is validated",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid text \"\u003cCity\u003e\" in the city search box",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate the coordinate \"\u003cCoordinate\u003e\" of the searched city",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;",
  "rows": [
    {
      "cells": [
        "City",
        "Coordinate"
      ],
      "line": 17,
      "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;1"
    },
    {
      "cells": [
        "Mumbai, IN",
        "[19.0144, 72.8479]"
      ],
      "line": 18,
      "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;2"
    },
    {
      "cells": [
        "Delhi, IN",
        "[28.6517, 77.2219]"
      ],
      "line": 19,
      "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;3"
    },
    {
      "cells": [
        "Kolkata, IN",
        "[22.5677, 88.3476]"
      ],
      "line": 20,
      "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;4"
    },
    {
      "cells": [
        "Bengaluru, IN",
        "[12.9791, 77.5913]"
      ],
      "line": 21,
      "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;5"
    },
    {
      "cells": [
        "Chennai, IN",
        "[13.0878, 80.2785]"
      ],
      "line": 22,
      "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;6"
    },
    {
      "cells": [
        "Hyderabad, IN",
        "[17.3616, 78.4747]"
      ],
      "line": 23,
      "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;7"
    },
    {
      "cells": [
        "Pune, IN",
        "[18.5203, 73.8543]"
      ],
      "line": 24,
      "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 125725,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Perform postive test case where searched city coordinate is validated",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid text \"Mumbai, IN\" in the city search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate the coordinate \"[19.0144, 72.8479]\" of the searched city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 3165162050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai, IN",
      "offset": 18
    }
  ],
  "location": "Homepage.enter_valid_city(String)"
});
formatter.result({
  "duration": 143117613,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_search_btn()"
});
formatter.result({
  "duration": 4186206382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[19.0144, 72.8479]",
      "offset": 25
    }
  ],
  "location": "Homepage.validate_coordinate(String)"
});
formatter.result({
  "duration": 161721412,
  "status": "passed"
});
formatter.after({
  "duration": 51200,
  "status": "passed"
});
formatter.before({
  "duration": 52906,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Perform postive test case where searched city coordinate is validated",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid text \"Delhi, IN\" in the city search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate the coordinate \"[28.6517, 77.2219]\" of the searched city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 2975329572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi, IN",
      "offset": 18
    }
  ],
  "location": "Homepage.enter_valid_city(String)"
});
formatter.result({
  "duration": 85256509,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_search_btn()"
});
formatter.result({
  "duration": 2325718948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[28.6517, 77.2219]",
      "offset": 25
    }
  ],
  "location": "Homepage.validate_coordinate(String)"
});
formatter.result({
  "duration": 181874294,
  "status": "passed"
});
formatter.after({
  "duration": 47787,
  "status": "passed"
});
formatter.before({
  "duration": 42666,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Perform postive test case where searched city coordinate is validated",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid text \"Kolkata, IN\" in the city search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate the coordinate \"[22.5677, 88.3476]\" of the searched city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1831788705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kolkata, IN",
      "offset": 18
    }
  ],
  "location": "Homepage.enter_valid_city(String)"
});
formatter.result({
  "duration": 162317607,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_search_btn()"
});
formatter.result({
  "duration": 2907601662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[22.5677, 88.3476]",
      "offset": 25
    }
  ],
  "location": "Homepage.validate_coordinate(String)"
});
formatter.result({
  "duration": 168025837,
  "status": "passed"
});
formatter.after({
  "duration": 93867,
  "status": "passed"
});
formatter.before({
  "duration": 54614,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Perform postive test case where searched city coordinate is validated",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid text \"Bengaluru, IN\" in the city search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate the coordinate \"[12.9791, 77.5913]\" of the searched city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 2070056371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru, IN",
      "offset": 18
    }
  ],
  "location": "Homepage.enter_valid_city(String)"
});
formatter.result({
  "duration": 156582071,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_search_btn()"
});
formatter.result({
  "duration": 2926447807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[12.9791, 77.5913]",
      "offset": 25
    }
  ],
  "location": "Homepage.validate_coordinate(String)"
});
formatter.result({
  "duration": 295636111,
  "status": "passed"
});
formatter.after({
  "duration": 55183,
  "status": "passed"
});
formatter.before({
  "duration": 43804,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Perform postive test case where searched city coordinate is validated",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid text \"Chennai, IN\" in the city search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate the coordinate \"[13.0878, 80.2785]\" of the searched city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1435024089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai, IN",
      "offset": 18
    }
  ],
  "location": "Homepage.enter_valid_city(String)"
});
formatter.result({
  "duration": 79237098,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_search_btn()"
});
formatter.result({
  "duration": 1996636730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[13.0878, 80.2785]",
      "offset": 25
    }
  ],
  "location": "Homepage.validate_coordinate(String)"
});
formatter.result({
  "duration": 147994126,
  "status": "passed"
});
formatter.after({
  "duration": 50631,
  "status": "passed"
});
formatter.before({
  "duration": 40391,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Perform postive test case where searched city coordinate is validated",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid text \"Hyderabad, IN\" in the city search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate the coordinate \"[17.3616, 78.4747]\" of the searched city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1389334360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyderabad, IN",
      "offset": 18
    }
  ],
  "location": "Homepage.enter_valid_city(String)"
});
formatter.result({
  "duration": 163129412,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_search_btn()"
});
formatter.result({
  "duration": 2655561770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[17.3616, 78.4747]",
      "offset": 25
    }
  ],
  "location": "Homepage.validate_coordinate(String)"
});
formatter.result({
  "duration": 85567123,
  "status": "passed"
});
formatter.after({
  "duration": 178062,
  "status": "passed"
});
formatter.before({
  "duration": 167822,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Perform postive test case where searched city coordinate is validated",
  "description": "",
  "id": "city-validation-feature;perform-postive-test-case-where-searched-city-coordinate-is-validated;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter valid text \"Pune, IN\" in the city search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate the coordinate \"[18.5203, 73.8543]\" of the searched city",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1435199307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune, IN",
      "offset": 18
    }
  ],
  "location": "Homepage.enter_valid_city(String)"
});
formatter.result({
  "duration": 77274431,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_search_btn()"
});
formatter.result({
  "duration": 2069113153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[18.5203, 73.8543]",
      "offset": 25
    }
  ],
  "location": "Homepage.validate_coordinate(String)"
});
formatter.result({
  "duration": 129487039,
  "status": "passed"
});
formatter.after({
  "duration": 58027,
  "status": "passed"
});
formatter.uri("ValidateImpInfo.feature");
formatter.feature({
  "line": 2,
  "name": "Information Feature",
  "description": "Verify the important labels and information on the home page",
  "id": "information-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 61440,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that the title of the page when Sign Up link is clicked",
  "description": "",
  "id": "information-feature;verify-that-the-title-of-the-page-when-sign-up-link-is-clicked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click the sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the title of the page is Members",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1284537662,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_signup_link()"
});
formatter.result({
  "duration": 4260273988,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.title_assertion()"
});
formatter.result({
  "duration": 18058804,
  "status": "passed"
});
formatter.after({
  "duration": 98987,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"\u003ctab\u003e\" is found on the screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;",
  "rows": [
    {
      "cells": [
        "tab"
      ],
      "line": 14,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;1"
    },
    {
      "cells": [
        "Weather"
      ],
      "line": 15,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;2"
    },
    {
      "cells": [
        "Maps"
      ],
      "line": 16,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;3"
    },
    {
      "cells": [
        "Guide"
      ],
      "line": 17,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;4"
    },
    {
      "cells": [
        "API"
      ],
      "line": 18,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;5"
    },
    {
      "cells": [
        "Price"
      ],
      "line": 19,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;6"
    },
    {
      "cells": [
        "Partners"
      ],
      "line": 20,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;7"
    },
    {
      "cells": [
        "Stations"
      ],
      "line": 21,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;8"
    },
    {
      "cells": [
        "Widgets"
      ],
      "line": 22,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;9"
    },
    {
      "cells": [
        "Blog"
      ],
      "line": 23,
      "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 105813,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"Weather\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1487631506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Weather",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 85401576,
  "status": "passed"
});
formatter.after({
  "duration": 55182,
  "status": "passed"
});
formatter.before({
  "duration": 44942,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"Maps\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1594013128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maps",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 133296886,
  "status": "passed"
});
formatter.after({
  "duration": 84195,
  "status": "passed"
});
formatter.before({
  "duration": 67697,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"Guide\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1682899148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guide",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 99224434,
  "status": "passed"
});
formatter.after({
  "duration": 51200,
  "status": "passed"
});
formatter.before({
  "duration": 41529,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"API\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1375204871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "API",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 108583223,
  "status": "passed"
});
formatter.after({
  "duration": 44942,
  "status": "passed"
});
formatter.before({
  "duration": 33565,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"Price\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1527239246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 180532287,
  "status": "passed"
});
formatter.after({
  "duration": 125724,
  "status": "passed"
});
formatter.before({
  "duration": 139378,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"Partners\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1274739690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Partners",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 114131025,
  "status": "passed"
});
formatter.after({
  "duration": 190578,
  "status": "passed"
});
formatter.before({
  "duration": 1482524,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"Stations\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1321752086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stations",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 131334789,
  "status": "passed"
});
formatter.after({
  "duration": 504035,
  "status": "passed"
});
formatter.before({
  "duration": 118898,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"Widgets\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1397076367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Widgets",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 127588088,
  "status": "passed"
});
formatter.after({
  "duration": 105245,
  "status": "passed"
});
formatter.before({
  "duration": 59165,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that the tabs are available on the home page",
  "description": "",
  "id": "information-feature;verify-that-the-tabs-are-available-on-the-home-page;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verify that the \"Blog\" is found on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1452261418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 17
    }
  ],
  "location": "Homepage.tabs_presence(String)"
});
formatter.result({
  "duration": 144567141,
  "status": "passed"
});
formatter.after({
  "duration": 70542,
  "status": "passed"
});
formatter.before({
  "duration": 59164,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify the drop down menu when Maps is clicked",
  "description": "",
  "id": "information-feature;verify-the-drop-down-menu-when-maps-is-clicked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "click the Maps tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "verify the presence of sub menus of Maps tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1546333996,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_maps_tab()"
});
formatter.result({
  "duration": 327529720,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.verify_submenus_map()"
});
formatter.result({
  "duration": 161670781,
  "status": "passed"
});
formatter.after({
  "duration": 168960,
  "status": "passed"
});
formatter.before({
  "duration": 245191,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the presence of other important elements on the homepage",
  "description": "",
  "id": "information-feature;verify-the-presence-of-other-important-elements-on-the-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "verify that Support Center element is present",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "verify that Sign In element is present",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "verify that Sign Up element is present",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "verify that Search button element is present",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "verify that label in search box is Your City Name",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "verify that search box element is present",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "verify that Current location text element is present",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_homepage()"
});
formatter.result({
  "duration": 1816508923,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.supportCenter_presence()"
});
formatter.result({
  "duration": 82511052,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.signIn_presence()"
});
formatter.result({
  "duration": 111060733,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.signOut_presence()"
});
formatter.result({
  "duration": 144415817,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.searchButton_presence()"
});
formatter.result({
  "duration": 153583458,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.text_in_search_box()"
});
formatter.result({
  "duration": 36000985,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.searchBox_presence()"
});
formatter.result({
  "duration": 133818557,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.currentLocation_presence()"
});
formatter.result({
  "duration": 146261861,
  "status": "passed"
});
formatter.after({
  "duration": 126293,
  "status": "passed"
});
});