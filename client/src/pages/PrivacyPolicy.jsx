export function PrivacyPolicyContent() {
  return (
    <>
      <p>
        MediAlert respects your privacy and is committed to protecting your personal information.
        This application stores only the data necessary to provide medication reminders and improve
        user experience.
      </p>

      <p><b>Information We Collect:</b></p>
      <ul>
        <li>Name and email address for account access</li>
        <li>Medication and schedule data for reminder functionality</li>
      </ul>

      <p><b>How Your Information Is Used:</b></p>
      <ul>
        <li>To deliver accurate and timely medication reminders</li>
        <li>To maintain secure user accounts</li>
      </ul>

      <p>
        Your information is never sold, shared, or used for advertising. We follow best practices
        to protect your data and comply with health data handling guidelines.
      </p>

      <p style={{ marginTop: "16px", color: "#aaa" }}>
       This is a CI/CD demo update for the Web Application Development project.
      </p>

    </>
  );
}

export default function PrivacyPolicy() {
  return (
    <section style={{ padding: 24, maxWidth: 800, margin: "0 auto", color: "inherit" }}>
      <h2 style={{ marginBottom: 12 }}>Privacy Policy</h2>
      <PrivacyPolicyContent />
    </section>
  );
}
