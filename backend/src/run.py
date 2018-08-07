''' Startup script for FullStackTutorial backend '''

from api import create_app

APP = create_app()

if __name__ == "__main__":
    APP.run(host='0.0.0.0')
