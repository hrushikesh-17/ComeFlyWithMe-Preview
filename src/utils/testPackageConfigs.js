// =====================================================
// PACKAGE CONFIG TESTER
// =====================================================

const destinations = [
  "bali",
  "phuket",
  "vietnam",
  "malaysia",
  "singapore",
  "philippines",
];

const categories = [
  "friends",
  "family",
  "couple",
  "custom",
];

const packageTypes = [
  "standard",
  "delux",
  "premium",
];

// =====================================================
// LOAD ALL PACKAGE CONFIG FILES
// =====================================================

const configFiles = import.meta.glob(
  [
    "/src/pages/user/unprotectedRoutes/**/config/config.js",
    "/src/pages/user/unprotectedRoutes/**/config/config.jsx",
  ],
  {
    eager: true,
  }
);

// =====================================================
// FIND CONFIG
// =====================================================

const findConfig = (
  destination,
  category,
  packageType
) => {
  const basePath =
    `/src/pages/user/unprotectedRoutes/${destination}` +
    `/pages/${category}` +
    `/pages/${packageType}` +
    `/config/config`;

  const jsPath = `${basePath}.js`;
  const jsxPath = `${basePath}.jsx`;

  if (configFiles[jsPath]) {
    return configFiles[jsPath];
  }

  if (configFiles[jsxPath]) {
    return configFiles[jsxPath];
  }

  return null;
};

// =====================================================
// CHECK CONFIG
// =====================================================

const checkConfig = (
  config,
  category
) => {
  const errors = [];

  // ---------------------------------------------------
  // CONFIG FILE
  // ---------------------------------------------------

  if (!config) {
    errors.push("CONFIG FILE NOT FOUND");
    return errors;
  }

  // ---------------------------------------------------
  // DATA
  // ---------------------------------------------------

  if (!config.data) {
    errors.push("Missing data export");
  }

  // ---------------------------------------------------
  // ACTIVITIES
  //
  // Custom packages intentionally do not require
  // activities because LevelThreePage skips the
  // Introduction and Activities sections for /custom/.
  // ---------------------------------------------------

  if (
    category !== "custom" &&
    !config.activities
  ) {
    errors.push("Missing activities export");
  }

  // ---------------------------------------------------
  // DATA VALIDATION
  // ---------------------------------------------------

  if (config.data) {
    if (!config.data.title) {
      errors.push("Missing data.title");
    }

    if (!config.data.heroImg) {
      errors.push("Missing data.heroImg");
    }

    if (!Array.isArray(config.data.content)) {
      errors.push(
        "data.content is not an array"
      );
    }

    if (!Array.isArray(config.data.sliderImg)) {
      errors.push(
        "data.sliderImg is not an array"
      );
    }

    if (!config.data.price) {
      errors.push("Missing data.price");
    }
  }

  // ---------------------------------------------------
  // ACTIVITIES VALIDATION
  // ---------------------------------------------------

  if (config.activities) {
    if (!Array.isArray(config.activities)) {
      errors.push(
        "activities is not an array"
      );
    } else if (config.activities.length === 0) {
      errors.push(
        "activities array is empty"
      );
    } else {
      config.activities.forEach(
        (activity, index) => {
          if (!activity) {
            errors.push(
              `Activity ${index} is missing`
            );
            return;
          }

          if (
            typeof activity.day !== "number"
          ) {
            errors.push(
              `Activity ${index} missing numeric day`
            );
          }

          if (!activity.title) {
            errors.push(
              `Activity ${index} missing title`
            );
          }

          if (!activity.image) {
            errors.push(
              `Activity ${index} missing image`
            );
          }

          if (!activity.color) {
            errors.push(
              `Activity ${index} missing color`
            );
          }

          if (!Array.isArray(activity.plans)) {
            errors.push(
              `Activity ${index} plans is not an array`
            );
          }

          if (
            Array.isArray(activity.plans)
          ) {
            activity.plans.forEach(
              (plan, planIndex) => {
                if (!plan) {
                  errors.push(
                    `Activity ${index} plan ${planIndex} is missing`
                  );
                  return;
                }

                if (!plan.title) {
                  errors.push(
                    `Activity ${index} plan ${planIndex} missing title`
                  );
                }

                if (!Array.isArray(plan.data)) {
                  errors.push(
                    `Activity ${index} plan ${planIndex} data is not an array`
                  );
                }
              }
            );
          }
        }
      );
    }
  }

  return errors;
};

// =====================================================
// PRINT FAILURE
// =====================================================

const printFailure = (
  url,
  errors
) => {
  console.error(
    `❌ FAIL  ${url}`
  );

  errors.forEach((error) => {
    console.error(
      `   → ${error}`
    );
  });
};

// =====================================================
// MAIN TEST
// =====================================================

export const runPackageConfigTest = () => {
  console.clear();

  console.log(
    "====================================================="
  );

  console.log(
    "PACKAGE CONFIG TEST RESULTS"
  );

  console.log(
    "====================================================="
  );

  const results = [];

  let total = 0;
  let passed = 0;
  let failed = 0;

  destinations.forEach(
    (destination) => {
      categories.forEach(
        (category) => {
          packageTypes.forEach(
            (packageType) => {
              total++;

              const config =
                findConfig(
                  destination,
                  category,
                  packageType
                );

              const errors =
                checkConfig(
                  config,
                  category
                );

              const url =
                `/${destination}/${category}/${packageType}`;

              // -----------------------------------------
              // PASS
              // -----------------------------------------

              if (errors.length === 0) {
                passed++;

                const activityCount =
                  Array.isArray(
                    config?.activities
                  )
                    ? config.activities.length
                    : 0;

                if (category === "custom") {
                  console.log(
                    `✅ PASS  ${url} (custom package)`
                  );
                } else {
                  console.log(
                    `✅ PASS  ${url} (${activityCount} activities)`
                  );
                }
              }

              // -----------------------------------------
              // FAIL
              // -----------------------------------------

              else {
                failed++;

                printFailure(
                  url,
                  errors
                );
              }

              // -----------------------------------------
              // SAVE RESULT
              // -----------------------------------------

              results.push({
                destination,
                category,
                packageType,
                url,
                status:
                  errors.length === 0
                    ? "PASS"
                    : "FAIL",
                errors,
              });
            }
          );
        }
      );
    }
  );

  // ===================================================
  // SUMMARY
  // ===================================================

  console.log(
    "====================================================="
  );

  console.log(
    `Total: ${total}`
  );

  console.log(
    `Passed: ${passed}`
  );

  console.log(
    `Failed: ${failed}`
  );

  console.log(
    "====================================================="
  );

  if (failed === 0) {
    console.log(
      "🎉 ALL 72 PACKAGE CONFIGS PASSED"
    );
  } else {
    console.error(
      `⚠️ ${failed} PACKAGE CONFIGS FAILED`
    );
  }

  console.log(
    "====================================================="
  );

  return results;
};

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default runPackageConfigTest;