''' Define routes for FullStackTutorial back-end
'''

from flask import request
from flask_restful import Resource, Api
from .dbconn import insert_high_score, get_high_scores, clear_high_scores

class GetHighScores(Resource):
    ''' Define resource for /getHighScores route '''

    def get(self):
        return get_high_scores()

class PostHighScore(Resource):
    ''' Define resource for /postHighScore route '''

    def post(self):
        data = request.get_json()
        return insert_high_score(
            **data
        )

class ClearHighScores(Resource):
    ''' Define resource for /clearHighScores route '''

    def post(self):
        return {
            'scores_deleted': clear_high_scores()
        }

def add_routes(app):
    ''' Add resources to the provided flask application '''
    api = Api(app)

    # add resources
    api.add_resource(GetHighScores, '/getHighScores')
    api.add_resource(PostHighScore, '/postHighScore')
    api.add_resource(ClearHighScores, '/clearHighScores')
