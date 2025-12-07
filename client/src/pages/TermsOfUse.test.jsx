// client/src/pages/TermsOfUse.test.jsx
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import TermsOfUse, { TermsOfUseContent } from "./TermsOfUse.jsx";

describe("TermsOfUse page", () => {
  it("renders the main heading", () => {
    render(<TermsOfUse />);

    // el título "Terms of Use"
    const heading = screen.getByRole("heading", { name: /terms of use/i });
    expect(heading).toBeInTheDocument();
  });

  it("shows the key terms list items", () => {
    render(<TermsOfUseContent />);

    expect(
      screen.getByText(
        /MediAlert provides reminders but does not replace medical advice\./i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Users are responsible for managing and verifying their medication schedules\./i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /MediAlert is not liable for missed doses or medical outcomes\./i
      )
    ).toBeInTheDocument();
  });
});
