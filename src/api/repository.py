from models import session, User


class ModelManagement:
    def get_user_data(email):
        user_data = session.query(User).where(User.email == email)

