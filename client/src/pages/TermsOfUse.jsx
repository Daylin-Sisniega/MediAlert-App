export function TermsOfUseContent() {
  return (
    <>
      <p>
        By using MediAlert, you agree to use this application responsibly and only for personal
        health organization purposes.
      </p>

      <p><b>Key Terms:</b></p>
      <ul>
        <li>MediAlert provides reminders but does not replace medical advice.</li>
        <li>Users are responsible for managing and verifying their medication schedules.</li>
        <li>MediAlert is not liable for missed doses or medical outcomes.</li>
      </ul>

      <p>
        Continued use of the application confirms your acceptance of these terms.
      </p>
    </>
  );
}

export default function TermsOfUse() {
  return (
    <section style={{ padding: 24, maxWidth: 800, margin: "0 auto", color: "inherit" }}>
      <h2 style={{ marginBottom: 12 }}>Terms of Use</h2>
      <TermsOfUseContent />
    </section>
  );
}
