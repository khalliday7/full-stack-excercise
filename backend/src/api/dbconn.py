''' Define database interactions for FullStackTutorial back-end
'''

from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

class HighScores(db.Model):
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
    new_score = HighScores(user_name, score)
    db.session.add(new_score)
    db.session.commit()
    query_result = HighScores.query.all()
    return query_result_to_json(query_result)

def get_high_scores():
    query_result = HighScores.query.all()
    return query_result_to_json(query_result)

def clear_high_scores():
    rows_deleted = HighScores.query.delete()
    db.session.commit()
    return rows_deleted

def query_result_to_json(query_result):
    return [
        {
            'user_name': r.user_name,
            'score': r.score,
            'date': str(r.date)
        }
        for r in query_result
    ]


