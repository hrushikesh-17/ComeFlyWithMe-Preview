import { useState } from "react";
import { useLocation } from "react-router-dom";

const TRIPMATE_API_URL =
  import.meta.env.VITE_TRIPMATE_API_URL ||
  "http://localhost:4000";

const s = {
  page: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "60px 24px 100px",
    fontFamily: "'Cygre Light', sans-serif",
  },

  heading: {
    fontFamily: "'Italiana', sans-serif",
    fontSize: 48,
    letterSpacing: 2,
    fontWeight: 100,
    color: "#fefae0",
    marginBottom: 12,
    lineHeight: 1.2,
  },

  subtitle: {
    color: "#dda15e",
    fontSize: 15,
    marginBottom: 48,
    lineHeight: 1.7,
  },

  card: {
    background: "#1e1e1e",
    border: "1px solid #bc6c25",
    borderRadius: 20,
    padding: "40px 44px",
  },

  sectionLabel: {
    fontSize: 11,
    letterSpacing: 3,
    color: "#dda15e",
    marginBottom: 24,
    marginTop: 8,
    fontWeight: 600,
    textTransform: "uppercase",
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    marginBottom: 20,
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 20,
    marginBottom: 20,
  },

  fieldLabel: {
    display: "block",
    fontSize: 11,
    color: "#dda15e",
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    border: "1px solid #bc6c25",
    fontSize: 15,
    background: "transparent",
    color: "#fefae0",
    outline: "none",
    fontFamily: "'Cygre Light', sans-serif",
    boxSizing: "border-box",
    transition:
      "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
  },

  divider: {
    height: 1,
    background: "#bc6c25",
    margin: "28px 0",
    opacity: 0.3,
  },

  chipGroup: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 10,
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 36,
    flexWrap: "wrap",
    gap: 16,
  },

  note: {
    color: "#606c38",
    fontSize: 13,
  },

  btnGold: {
    background: "#bc6c25",
    color: "#fefae0",
    border: "none",
    borderRadius: 12,
    padding: "14px 32px",
    fontSize: 15,
    cursor: "pointer",
    fontFamily: "'Cygre Light', sans-serif",
    letterSpacing: 1,
    transition: "all 0.25s ease",
  },

  btnOutline: {
    background: "transparent",
    border: "1px solid #bc6c25",
    color: "#fefae0",
    borderRadius: 10,
    padding: "12px 24px",
    fontSize: 14,
    cursor: "pointer",
    fontFamily: "'Cygre Light', sans-serif",
    transition: "all 0.25s ease",
  },

  confirmBanner: {
    background: "linear-gradient(135deg, #bc6c25, #8a4e1a)",
    padding: "32px 44px",
    borderRadius: "20px 20px 0 0",
    color: "#fefae0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },

  confirmBody: {
    padding: "36px 44px",
  },

  confirmItem: {
    padding: "16px 0",
    borderBottom: "1px solid #2a2a2a",
  },

  confirmLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#dda15e",
    marginBottom: 5,
  },

  confirmValue: {
    fontSize: 16,
    color: "#fefae0",
  },

  actions: {
    display: "flex",
    gap: 12,
    marginTop: 28,
    flexWrap: "wrap",
  },
};

const Booking = () => {
  const location = useLocation();

  const [step, setStep] = useState(1);

  // If the user came from a destination card,
  // automatically fill the "To" field.
  const [destination, setDestination] = useState(
    location.state?.destination || ""
  );

  const [isFlying, setIsFlying] = useState(false);
  const [selectedChip, setSelectedChip] = useState("");
  const [formData, setFormData] = useState({});
  const [itinerary, setItinerary] = useState("");

  const [bookingRef] = useState(
    "CFW-" +
      Math.random()
        .toString(36)
        .substr(2, 6)
        .toUpperCase()
  );

  const handleDestinationChange = (value) => {
    setDestination(value);

    if (value.trim()) {
      setIsFlying(true);

      setTimeout(() => {
        setIsFlying(false);
      }, 1800);
    }
  };

  const handleSubmit = () => {
    const firstName = document
      .getElementById("f-first-name")
      .value.trim();

    const lastName = document
      .getElementById("f-last-name")
      .value.trim();

    const mobile = document
      .getElementById("f-mobile")
      .value.trim();

    const from = document
      .getElementById("f-from")
      .value.trim();

    const to = document
      .getElementById("f-to")
      .value.trim();

    if (!firstName || !lastName || !mobile || !from || !to) {
      alert(
        "Please fill in First Name, Last Name, Mobile, From and To at minimum."
      );
      return;
    }

    const email =
      document.getElementById("f-email").value.trim() || "—";

    const count =
      document.getElementById("f-count").value || "—";

    const notes = document
      .getElementById("f-notes")
      .value.trim();

    const fullName = `${firstName} ${lastName}`;

    setFormData({
      firstName,
      lastName,
      name: fullName,
      mobile,
      email,
      count,
      notes,
      route: from + "  →  " + to,
      travelType: selectedChip || "—",
    });

    setItinerary("");
    setStep(2);
  };

  const addToCart = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycby5N7Ixh7dtdTAlSpKcF10gPcM1DhaHnGumlSK-dRl5-3eoGXT6PzwXSyJtn7gQK9Il/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    alert("Booking added and synced!");
  };

  const sendWhatsApp = () => {
    const message = `Hello! New Booking Request

Ref: ${bookingRef}
Name: ${formData.name}
Mobile: ${formData.mobile}
Route: ${formData.route}
Travel Type: ${formData.travelType}
Travellers: ${formData.count}

Sent via ComeFlyWithMe`;

    window.open(
      `https://web.whatsapp.com/send?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const sendEmail = () => {
    const details = `Booking Ref: ${bookingRef}
Name: ${formData.name}
Mobile: ${formData.mobile}
Route: ${formData.route}
Travel Type: ${formData.travelType}
Travellers: ${formData.count}`;

    navigator.clipboard
      .writeText(details)
      .then(() => {
        alert("Booking details copied! Paste in Zoho Mail.");
      })
      .catch(() => {
        alert("Could not copy booking details.");
      });
  };

  const generateItinerary = async () => {
    setItinerary("Generating your 6-day itinerary... please wait");

    try {
      const query = `
Create a travel itinerary for this booking.

IMPORTANT REQUIREMENT:
Create EXACTLY 6 DAYS of itinerary.
The itinerary MUST contain Day 1, Day 2, Day 3, Day 4, Day 5, and Day 6.
Do NOT return 3 days, 4 days, 5 days, or any other duration.
Do NOT shorten the itinerary.

Traveller: ${formData.name}
Route: ${formData.route}
Travel Type: ${formData.travelType}
Number of Travellers: ${formData.count}
Special Requirements: ${formData.notes || "None"}

Create a practical and detailed 6-day, day-by-day travel itinerary.

For each of the 6 days:
- Include suggested places to visit
- Include activities
- Include food suggestions
- Include useful travel tips where appropriate

Keep the itinerary clear and easy for a traveller to follow.
Return exactly 6 itinerary days.
`;

      const response = await fetch(
        `${TRIPMATE_API_URL}/plan-trip`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
          }),
        }
      );

      let data = {};

      try {
        data = await response.json();
      } catch {
        throw new Error(
          `TripMate AI returned an invalid response (${response.status}).`
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            `TripMate AI request failed with status ${response.status}.`
        );
      }

      if (!data?.itinerary?.days?.length) {
        throw new Error("TripMate AI returned no itinerary days.");
      }

      if (data.itinerary.days.length !== 6) {
        throw new Error(
          `TripMate AI returned ${data.itinerary.days.length} days instead of exactly 6 days.`
        );
      }

      const formattedItinerary = data.itinerary.days
        .map((day) => {
          const activities = Array.isArray(day.activities)
            ? day.activities
                .map((activity) => `• ${activity}`)
                .join("\n")
            : "";

          return `DAY ${day.day}
${day.theme || "Travel Experience"}

${activities}`;
        })
        .join("\n\n");

      setItinerary(formattedItinerary);
    } catch (error) {
      console.error("Generate itinerary failed:", error);

      setItinerary(
        error?.message?.includes("instead of exactly 6 days")
          ? "TripMate AI did not return a 6-day itinerary. Please try again."
          : "Could not generate itinerary. Please try again."
      );
    }
  };

  const chipStyle = (chip) => ({
    padding: "10px 20px",
    borderRadius: 100,
    border: `1px solid ${
      selectedChip === chip ? "#dda15e" : "#bc6c25"
    }`,
    background:
      selectedChip === chip
        ? "rgba(221,161,94,0.15)"
        : "transparent",
    color:
      selectedChip === chip ? "#dda15e" : "#fefae0",
    cursor: "pointer",
    fontSize: 14,
    fontFamily: "'Cygre Light', sans-serif",
    letterSpacing: 0.5,
    transition: "all 0.2s ease",
  });

  return (
    <div style={s.page}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: 48,
          paddingBottom: 24,
          borderBottom: "1px solid #bc6c25",
        }}
      >
        <div
          style={{
            border: "1px solid #bc6c25",
            borderRadius: 100,
            padding: "6px 18px",
            fontSize: 12,
            color: "#dda15e",
            letterSpacing: 1,
          }}
        >
          Step {step} of 2
        </div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2 style={s.heading}>
            Plan Your Dream Getaway
          </h2>

          <p style={s.subtitle}>
            Seamless travel begins here. Share your details
            and let us turn your plans into an unforgettable
            experience.
          </p>

          <div style={s.card}>
            {/* Traveller Details */}
            <div style={s.sectionLabel}>
              Traveller Details
            </div>

            <div style={s.grid2}>
              {/* First Name */}
              <div>
                <label style={s.fieldLabel}>
                  First Name
                </label>

                <input
                  id="f-first-name"
                  style={s.input}
                  placeholder="e.g. Priya"
                  autoComplete="given-name"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#dda15e";
                    e.target.style.background =
                      "rgba(221,161,94,0.04)";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(221,161,94,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#bc6c25";
                    e.target.style.background = "transparent";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Last Name */}
              <div>
                <label style={s.fieldLabel}>
                  Last Name
                </label>

                <input
                  id="f-last-name"
                  style={s.input}
                  placeholder="e.g. Sharma"
                  autoComplete="family-name"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#dda15e";
                    e.target.style.background =
                      "rgba(221,161,94,0.04)";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(221,161,94,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#bc6c25";
                    e.target.style.background = "transparent";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Mobile */}
              <div>
                <label style={s.fieldLabel}>
                  Mobile
                </label>

                <input
                  id="f-mobile"
                  type="tel"
                  style={s.input}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#dda15e";
                    e.target.style.background =
                      "rgba(221,161,94,0.04)";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(221,161,94,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#bc6c25";
                    e.target.style.background = "transparent";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={s.fieldLabel}>
                  Email
                </label>

                <input
                  id="f-email"
                  type="email"
                  style={s.input}
                  placeholder="you@example.com"
                  autoComplete="email"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#dda15e";
                    e.target.style.background =
                      "rgba(221,161,94,0.04)";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(221,161,94,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#bc6c25";
                    e.target.style.background = "transparent";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            <div style={s.divider} />

            {/* Trip Details */}
            <div style={s.sectionLabel}>
              Trip Details
            </div>

            <div style={s.grid3}>
              {/* From */}
              <div>
                <label style={s.fieldLabel}>
                  From
                </label>

                <input
                  id="f-from"
                  style={s.input}
                  placeholder="Origin city"
                  autoComplete="address-level2"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#dda15e";
                    e.target.style.background =
                      "rgba(221,161,94,0.04)";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(221,161,94,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#bc6c25";
                    e.target.style.background = "transparent";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* To */}
              <div>
                <label style={s.fieldLabel}>
                  To
                </label>

                <input
                  id="f-to"
                  style={s.input}
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) =>
                    handleDestinationChange(e.target.value)
                  }
                  onFocus={(e) => {
                    e.target.style.borderColor = "#dda15e";
                    e.target.style.background =
                      "rgba(221,161,94,0.04)";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(221,161,94,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#bc6c25";
                    e.target.style.background = "transparent";
                    e.target.style.boxShadow = "none";
                  }}
                />

                {isFlying && (
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 12,
                      color: "#dda15e",
                    }}
                  >
                    ✈️ Flying to {destination}...
                  </div>
                )}
              </div>

              {/* Number of Travellers */}
              <div>
                <label style={s.fieldLabel}>
                  No. of Travellers
                </label>

                <select
                  id="f-count"
                  style={{
                    ...s.input,
                    cursor: "pointer",
                    colorScheme: "dark",
                  }}
                >
                  <option
                    value=""
                    style={{
                      background: "#1e1e1e",
                    }}
                  >
                    Select
                  </option>

                  <option
                    style={{
                      background: "#1e1e1e",
                    }}
                  >
                    1
                  </option>

                  <option
                    style={{
                      background: "#1e1e1e",
                    }}
                  >
                    2
                  </option>

                  <option
                    style={{
                      background: "#1e1e1e",
                    }}
                  >
                    3
                  </option>

                  <option
                    style={{
                      background: "#1e1e1e",
                    }}
                  >
                    4
                  </option>

                  <option
                    style={{
                      background: "#1e1e1e",
                    }}
                  >
                    5
                  </option>

                  <option
                    style={{
                      background: "#1e1e1e",
                    }}
                  >
                    6+
                  </option>
                </select>
              </div>
            </div>

            <div style={s.divider} />

            {/* Travel Type */}
            <div style={s.sectionLabel}>
              Travel Type
            </div>

            <div style={s.chipGroup}>
              {[
                "Solo",
                "Couple",
                "Family",
                "Group (5+)",
                "Corporate",
              ].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setSelectedChip(chip)}
                  style={chipStyle(chip)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "#dda15e";
                    e.currentTarget.style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      selectedChip === chip
                        ? "#dda15e"
                        : "#bc6c25";
                    e.currentTarget.style.transform =
                      "translateY(0)";
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>

            <div style={s.divider} />

            {/* Special Requirements */}
            <div style={s.sectionLabel}>
              Special Requirements
            </div>

            <textarea
              id="f-notes"
              rows={3}
              placeholder="Dietary preferences, accessibility needs, surprise plans..."
              style={{
                ...s.input,
                resize: "none",
                width: "100%",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#dda15e";
                e.target.style.background =
                  "rgba(221,161,94,0.04)";
                e.target.style.boxShadow =
                  "0 0 0 3px rgba(221,161,94,0.08)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#bc6c25";
                e.target.style.background = "transparent";
                e.target.style.boxShadow = "none";
              }}
            />

            {/* Footer */}
            <div
              style={{
                ...s.footer,
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                style={s.btnGold}
                onClick={handleSubmit}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "#dda15e";
                  e.currentTarget.style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "#bc6c25";
                  e.currentTarget.style.transform =
                    "translateY(0)";
                }}
              >
                Generate Summary
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2 style={s.heading}>
            Your Booking Summary
          </h2>

          <p style={s.subtitle}>
            Review the details below.
          </p>

          <div
            style={{
              ...s.card,
              padding: 0,
              overflow: "hidden",
            }}
          >
            {/* Confirmation Header */}
            <div style={s.confirmBanner}>
              <div>
                <div
                  style={{
                    fontFamily: "'Italiana', sans-serif",
                    fontSize: 28,
                    letterSpacing: 2,
                    fontWeight: 100,
                  }}
                >
                  Trip Overview
                </div>

                <div
                  style={{
                    opacity: 0.8,
                    marginTop: 4,
                  }}
                >
                  {formData.route}
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 10,
                  padding: "10px 18px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: 2,
                  }}
                >
                  {bookingRef}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    opacity: 0.7,
                    letterSpacing: 1,
                  }}
                >
                  BOOKING REF
                </div>
              </div>
            </div>

            {/* Confirmation Body */}
            <div style={s.confirmBody}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                }}
              >
                {[
                  ["Traveller Name", formData.name],
                  ["Mobile", formData.mobile],
                  ["Email", formData.email],
                  ["Travel Type", formData.travelType],
                  ["No. of Travellers", formData.count],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    style={{
                      ...s.confirmItem,
                      paddingRight:
                        i % 2 === 0 ? 32 : 0,
                      paddingLeft:
                        i % 2 !== 0 ? 32 : 0,
                      borderRight:
                        i % 2 === 0
                          ? "1px solid #2a2a2a"
                          : "none",
                    }}
                  >
                    <div style={s.confirmLabel}>
                      {label}
                    </div>

                    <div style={s.confirmValue}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Requirements */}
              {formData.notes && (
                <div
                  style={{
                    marginTop: 24,
                    padding: 20,
                    background: "#1a1a1a",
                    borderRadius: 12,
                    borderLeft: "3px solid #bc6c25",
                  }}
                >
                  <div style={s.confirmLabel}>
                    Special Requirement
                  </div>

                  <div
                    style={{
                      color: "#fefae0",
                      lineHeight: 1.6,
                    }}
                  >
                    {formData.notes}
                  </div>
                </div>
              )}

              {/* AI Itinerary */}
              {itinerary && (
                <div
                  style={{
                    marginTop: 24,
                    padding: 20,
                    background: "#1a1a1a",
                    borderRadius: 12,
                    borderLeft: "3px solid #dda15e",
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.6,
                    color: "#fefae0",
                  }}
                >
                  <div style={s.confirmLabel}>
                    AI Generated Itinerary
                  </div>

                  <div>{itinerary}</div>
                </div>
              )}

              {/* Actions */}
              <div style={s.actions}>
                <button
                  type="button"
                  style={s.btnOutline}
                  onClick={() => setStep(1)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(188,108,37,0.1)";
                    e.currentTarget.style.borderColor =
                      "#dda15e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                    e.currentTarget.style.borderColor =
                      "#bc6c25";
                  }}
                >
                  Edit Details
                </button>

                <button
                  type="button"
                  style={s.btnGold}
                  onClick={addToCart}
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  style={{
                    ...s.btnGold,
                    background: "#25D366",
                  }}
                  onClick={sendWhatsApp}
                >
                  WhatsApp
                </button>

                <button
                  type="button"
                  style={{
                    ...s.btnGold,
                    background: "#bc6c25",
                  }}
                  onClick={sendEmail}
                >
                  Email
                </button>

                <button
                  type="button"
                  style={{
                    ...s.btnGold,
                    background: "#283618",
                  }}
                  onClick={generateItinerary}
                >
                  Generate Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;