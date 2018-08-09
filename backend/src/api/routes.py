''' Define routes for FullStackTutorial back-end
    NOTE: I realize that I sort high scores on every request, instead of
    keeping them sorted in the database. This design choice could be up for
    debate, but I am not worried, because I do not have to worry about
    performance for the purposes of this tutorial.
'''

from flask import request
from flask_restful import Resource, Api
from flask_restful.utils import cors
from .dbconn import insert_high_score, get_high_scores, clear_high_scores

class GetHighScores(Resource):
    ''' Define resource for /getHighScores route '''

    def get(self):
        high_scores = get_high_scores()
        return sort_and_rank_scores(high_scores)

class PostHighScore(Resource):
    ''' Define resource for /postHighScore route '''

    def options(self):
        pass

    def post(self):
        data = request.get_json()
        print("Printing data...")
        print(data)
        high_scores = insert_high_score(**data)
        return sort_and_rank_scores(high_scores)

class ClearHighScores(Resource):
    ''' Define resource for /clearHighScores route '''
    def post(self):
        return {
            'scores_deleted': clear_high_scores()
        }

def sort_and_rank_scores(high_scores):
    sorted_scores = sorted(high_scores, key=lambda hs: hs['score'])
    ranked_scores = [(r+1, item) for r,item in enumerate(sorted_scores)]
    return ranked_scores

def add_routes(app):
    ''' Add resources to the provided flask application '''
    api = Api(app)

    # enable CORS
    api.decorators = [cors.crossdomain(
        origin="*", headers=['accept', 'Content-Type'],
        methods=['HEAD', 'OPTIONS', 'GET', 'PUT', 'POST', 'DELETE'])]

    # add resources
    api.add_resource(GetHighScores, '/getHighScores')
    api.add_resource(PostHighScore, '/postHighScore')
    api.add_resource(ClearHighScores, '/clearHighScores')

