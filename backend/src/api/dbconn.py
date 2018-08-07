''' Define database interactions for FullStackTutorial back-end
'''

import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class HighScores(db.Model):
    ''' Define model for high_scores table '''
    __tablename__ = 'high_scores'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(255))
    score = db.Column(db.Integer)
    date = db.Column(db.DateTime)

    def __init__(self, user_name=None, score=None):
        self.user_name = user_name
        self.score = score
        self.date = datetime.datetime.utcnow()

def insert_high_score(user_name, score):
    ''' Insert a new entry into the high_scores table '''
    new_score = HighScores(user_name, score)
    db.session.add(new_score)
    db.session.commit()
    query_result = HighScores.query.all()
    return query_result_to_json(query_result)

def get_high_scores():
    ''' Get all entries in the high_scores table '''
    query_result = HighScores.query.all()
    return query_result_to_json(query_result)

def clear_high_scores():
    ''' Clear high_scores table '''
    rows_deleted = HighScores.query.delete()
    db.session.commit()
    return rows_deleted

def query_result_to_json(query_result):
    ''' Translate table queury object to JSON serializable dictionary '''
    return [
        {
            'user_name': r.user_name,
            'score': r.score,
            'date': str(r.date)
        }
        for r in query_result
    ]
