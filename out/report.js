$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("newAddressesCreator.feature");
formatter.feature({
  "line": 1,
  "name": "New Addresses Creator",
  "description": "",
  "id": "new-addresses-creator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user can create new address",
  "description": "",
  "id": "new-addresses-creator;user-can-create-new-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "an open browser and logged user on prod-kurs.coderslab.pl",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on View My Customer Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Addresses button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on Create new address button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user fill a Address field with \u003caddress\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user fill a City field with \u003ccity\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fill a Zip/Postal Code field with \u003cpostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should see a confirm of adding new address",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "browser should be close",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "new-addresses-creator;user-can-create-new-address;",
  "rows": [
    {
      "cells": [
        "address",
        "postcode",
        "city"
      ],
      "line": 15,
      "id": "new-addresses-creator;user-can-create-new-address;;1"
    },
    {
      "cells": [
        "Poziomkowa 123",
        "00-231",
        "Warszawa"
      ],
      "line": 16,
      "id": "new-addresses-creator;user-can-create-new-address;;2"
    },
    {
      "cells": [
        "Pomidorowa 321",
        "25-325",
        "Wrocław"
      ],
      "line": 17,
      "id": "new-addresses-creator;user-can-create-new-address;;3"
    },
    {
      "cells": [
        "Truskawkowa 890",
        "45-123",
        "Opole"
      ],
      "line": 18,
      "id": "new-addresses-creator;user-can-create-new-address;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "user can create new address",
  "description": "",
  "id": "new-addresses-creator;user-can-create-new-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "an open browser and logged user on prod-kurs.coderslab.pl",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on View My Customer Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Addresses button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on Create new address button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user fill a Address field with Poziomkowa 123",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user fill a City field with Warszawa",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fill a Zip/Postal Code field with 00-231",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should see a confirm of adding new address",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "browser should be close",
  "keyword": "And "
});
formatter.match({
  "location": "NewAddressesCreatorSteps.anOpenBrowserAndLoggedUserOnProdKursCoderslabPl()"
});
formatter.result({
  "duration": 2914976270,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnViewMyCustomerAccountButton()"
});
formatter.result({
  "duration": 366548433,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnAddressesButton()"
});
formatter.result({
  "duration": 380014238,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnCreateNewAddressButton()"
});
formatter.result({
  "duration": 342247336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Poziomkowa 123",
      "offset": 30
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillAddressFieldWith(String)"
});
formatter.result({
  "duration": 104619606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Warszawa",
      "offset": 27
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillCityFieldWith(String)"
});
formatter.result({
  "duration": 79509192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 00-231",
      "offset": 38
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillZipCodeFieldWith(String)"
});
formatter.result({
  "duration": 73113066,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnSaveButton()"
});
formatter.result({
  "duration": 458570494,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userShouldSeeAConfirmOfAddingNewAddress()"
});
formatter.result({
  "duration": 124277039,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.browserShouldBeClose()"
});
formatter.result({
  "duration": 102655369,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user can create new address",
  "description": "",
  "id": "new-addresses-creator;user-can-create-new-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "an open browser and logged user on prod-kurs.coderslab.pl",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on View My Customer Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Addresses button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on Create new address button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user fill a Address field with Pomidorowa 321",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user fill a City field with Wrocław",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fill a Zip/Postal Code field with 25-325",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should see a confirm of adding new address",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "browser should be close",
  "keyword": "And "
});
formatter.match({
  "location": "NewAddressesCreatorSteps.anOpenBrowserAndLoggedUserOnProdKursCoderslabPl()"
});
formatter.result({
  "duration": 2288126303,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnViewMyCustomerAccountButton()"
});
formatter.result({
  "duration": 361451607,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnAddressesButton()"
});
formatter.result({
  "duration": 355853628,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnCreateNewAddressButton()"
});
formatter.result({
  "duration": 331611490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Pomidorowa 321",
      "offset": 30
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillAddressFieldWith(String)"
});
formatter.result({
  "duration": 98713761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Wrocław",
      "offset": 27
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillCityFieldWith(String)"
});
formatter.result({
  "duration": 79978521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 25-325",
      "offset": 38
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillZipCodeFieldWith(String)"
});
formatter.result({
  "duration": 71564243,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnSaveButton()"
});
formatter.result({
  "duration": 485172953,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userShouldSeeAConfirmOfAddingNewAddress()"
});
formatter.result({
  "duration": 79567848,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.browserShouldBeClose()"
});
formatter.result({
  "duration": 101089502,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "user can create new address",
  "description": "",
  "id": "new-addresses-creator;user-can-create-new-address;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "an open browser and logged user on prod-kurs.coderslab.pl",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on View My Customer Account Button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Addresses button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on Create new address button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user fill a Address field with Truskawkowa 890",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user fill a City field with Opole",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fill a Zip/Postal Code field with 45-123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should see a confirm of adding new address",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "browser should be close",
  "keyword": "And "
});
formatter.match({
  "location": "NewAddressesCreatorSteps.anOpenBrowserAndLoggedUserOnProdKursCoderslabPl()"
});
formatter.result({
  "duration": 2186974812,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnViewMyCustomerAccountButton()"
});
formatter.result({
  "duration": 340359022,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnAddressesButton()"
});
formatter.result({
  "duration": 302504132,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnCreateNewAddressButton()"
});
formatter.result({
  "duration": 372069211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Truskawkowa 890",
      "offset": 30
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillAddressFieldWith(String)"
});
formatter.result({
  "duration": 102296921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Opole",
      "offset": 27
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillCityFieldWith(String)"
});
formatter.result({
  "duration": 71469250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 45-123",
      "offset": 38
    }
  ],
  "location": "NewAddressesCreatorSteps.userFillZipCodeFieldWith(String)"
});
formatter.result({
  "duration": 74105363,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userClickOnSaveButton()"
});
formatter.result({
  "duration": 474692701,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.userShouldSeeAConfirmOfAddingNewAddress()"
});
formatter.result({
  "duration": 32397716,
  "status": "passed"
});
formatter.match({
  "location": "NewAddressesCreatorSteps.browserShouldBeClose()"
});
formatter.result({
  "duration": 93359945,
  "status": "passed"
});
});