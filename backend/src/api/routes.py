''' Define routes for FullStackTutorial back-end
'''

from flask import request
from flask_restful import Resource, Api
from .dbconn import insert_high_score, get_high_scores, clear_high_scores

class GetHighScores(Resource):
    def get(self):
        return get_high_scores()

class PostHighScore(Resource):
    def post(self):
        data = request.get_json()
        return insert_high_score(
            **data
        )

class ClearHighScores(Resource):
    def post(self):
        return {
            'scores_deleted': clear_high_scores()
        }

def add_routes(app):
    api = Api(app)

    # add resources
    api.add_resource(GetHighScores, '/getHighScores')
    api.add_resource(PostHighScore, '/postHighScore')
    api.add_resource(ClearHighScores, '/clearHighScores')
