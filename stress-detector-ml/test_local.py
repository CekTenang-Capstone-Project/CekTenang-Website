from main import predict_stress, UserInput
import json

payload = {
    "sleep_hours": 6.0,
    "physical_activity_minutes": 30,
    "study_hours": 4.0,
    "screen_time_hours": 5.0,
    "social_media_hours": 2.0,
    "assignment_load": 7,
    "deadline_pressure": 6,
    "fatigue_level": 5,
    "mood_score": 6
}

data = UserInput(**payload)
print("Running test...")
try:
    result = predict_stress(data)
    print(json.dumps(result, indent=2))
except Exception as e:
    print(f"Error: {e}")
