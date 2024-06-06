import firebase_admin
from firebase_admin import credentials, firestore

# Load the Firebase credentials
cred = credentials.Certificate('./bcn-geometry-firebase-adminsdk-op373-741007bec7.json')
firebase_admin.initialize_app(cred)

# Get a Firestore client
db = firestore.client()

def create_problem(title, description,solve, image, image_result, category):
    # Tạo một mẫu mới vào Firestore
    problem_ref = db.collection('problems').document()
    problem_ref.set({
        'title': title,
        'description': description,
        'solve': solve,
        'image':image,
        'image_result':image_result,
        'category': category
    })

if __name__ == "__main__":
    # Điền các giá trị của một mẫu problem
    title = "imo_2000_p2 "
    description = """
        Let BC be a diameter of circle ω with center O. Let A be a point of circle ω such
        that 0◦ < ∠AOB < 120◦. Let D be the midpoint of arc AB not containing C. Line
        ℓ passes through O and is parallel to line AD. Line ℓ intersects line AC at J. The
        perpendicular bisector of segment OA intersects circle ω at E and F. Prove that J
        is the incenter of triangle CEF."""
    solve = """Since 𝐵𝐶  is the diameter, ∠𝐵𝐴𝐶 = 90∘. 𝐷 is the midpoint of arc 𝐴𝐵, so ∠AOD=60∘.
            Line ℓ is parallel to AD and passes through O.
            J is where ℓ intersects AC.
            The perpendicular bisector of OA passes through O and is perpendicular to OA. 
            E and F are points where this bisector intersects 𝜔 ω.
            ℓ being parallel to AD implies reflection symmetry. 
            Since J lies on the angle bisector of ∠AOD and ∠AOD=60∘ ,J is equidistant from E and F.
        """
    image = ""
    image_result = "https://firebasestorage.googleapis.com/v0/b/bcn-geometry.appspot.com/o/imo%2FScreenshot%202024-06-05%20224042.png?alt=media&token=37c74dd2-e019-4dbd-81fb-63c595d574e2"
    category = "imo"  # Chọn category tùy theo yêu cầu của bạn
    # Gọi hàm create_problem để tạo một mẫu mới và đẩy lên Firestore
    create_problem(title, description,solve, image, image_result, category)

