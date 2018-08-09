''' Python script for testing FullStackTutorial backend '''

import json
import unittest
import requests

# consider setting urls in a config file
SERVER_URL = 'http://localhost:5000'
GET_HIGH_SCORES_URL = SERVER_URL + '/getHighScores'
POST_HIGH_SCORE_URL = SERVER_URL + '/postHighScore'
CLEAR_HIGH_SCORES_URL = SERVER_URL + '/clearHighScores'
DATA = {
        'user_name': 'test',
        'score': 100
}
HEADERS = {
    'content-type': 'application/json'
}

class LiveBackendTests(unittest.TestCase):
    ''' Define tests for live backend. Tests include clearing the high scores
        table, posting new entries, and retrieving entries from the table.
    '''

    def test_live_backend(self):
        ''' Run live backend tests '''

        # clear high scores table
        print("Cleaing high scores table...")
        r = requests.post(CLEAR_HIGH_SCORES_URL)
        r_json = r.json()

        print("Clear high scores POST response...")
        print(r_json)


        # test GET on empty DB
        print("Testing GET on empy DB...")
        r = requests.get(GET_HIGH_SCORES_URL)
        r_json = r.json()

        # log json response
        print("Printing empty GET json response...")
        print(r_json)

        # test POST
        print("Testing high score POST...")
        json_data = json.dumps(DATA)
        r = requests.post(POST_HIGH_SCORE_URL, data=json_data, headers=HEADERS)
        r_json = r.json()

        # log json response
        print("Printing response json...")
        print(r_json)

        # test GET on DB with single entry
        r = requests.get(GET_HIGH_SCORES_URL)
        r_json = r.json()

        # log json response
        print("Printing response json...")
        print(r_json)

if __name__ == '__main__':
    unittest.main()
