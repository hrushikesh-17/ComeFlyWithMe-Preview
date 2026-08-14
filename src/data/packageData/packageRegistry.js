// =====================================================
// PACKAGE REGISTRY
// Automatically finds package config files
// =====================================================

const configFiles = import.meta.glob(
  [
    "/src/pages/user/unprotectedRoutes/**/*.js",
    "/src/pages/user/unprotectedRoutes/**/*.jsx",
  ],
  {
    eager: true,
  }
);

// =====================================================
// GET PACKAGE CONFIG
// =====================================================

export const getPackageConfig = (
  destination,
  category,
  packageType
) => {
  const destinationName = destination.toLowerCase();
  const categoryName = category.toLowerCase();
  const packageName = packageType.toLowerCase();

  const entry = Object.entries(configFiles).find(
    ([filePath]) => {
      const path = filePath.toLowerCase();

      return (
        path.includes(
          `/unprotectedroutes/${destinationName}/`
        ) &&
        path.includes(`/${categoryName}/`) &&
        path.includes(`/${packageName}/`) &&
        (
          path.endsWith("/config.js") ||
          path.endsWith("/config.jsx")
        )
      );
    }
  );

  if (!entry) {
    console.error(
      "Package config not found:",
      destination,
      category,
      packageType
    );

    return null;
  }

  return entry[1];
};