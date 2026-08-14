import { useLocation } from "react-router-dom";
import LevelThreePage from "@/components/user/pages/levelThreePage/LevelThreePage";

// =====================================================
// LOAD PACKAGE CONFIG FILES
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
// FIND EXACT CONFIG
// =====================================================

const findConfig = (pathname) => {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length !== 3) {
    console.error("INVALID PACKAGE PATH:", pathname);
    return null;
  }

  const [destination, category, packageType] = parts;

  const destinationName = destination.toLowerCase();
  const categoryName = category.toLowerCase();
  const packageName = packageType.toLowerCase();

  const basePath =
    `/src/pages/user/unprotectedRoutes/${destinationName}` +
    `/pages/${categoryName}` +
    `/pages/${packageName}` +
    `/config/config`;

  const jsPath = `${basePath}.js`;
  const jsxPath = `${basePath}.jsx`;

  const module =
    configFiles[jsPath] ||
    configFiles[jsxPath];

  // ===================================================
  // CONFIG NOT FOUND
  // ===================================================

  if (!module) {
    console.error("CONFIG NOT FOUND:", {
      pathname,
      jsPath,
      jsxPath,
      availableFiles: Object.keys(configFiles),
    });

    return null;
  }

  const isCustom = categoryName === "custom";

  // ===================================================
  // NORMAL PACKAGE
  // Requires data + activities
  // ===================================================

  if (!isCustom && module.data && module.activities) {
    return {
      data: module.data,
      activities: module.activities,
    };
  }

  // ===================================================
  // CUSTOM PACKAGE
  // Requires only data
  // ===================================================

  if (isCustom && module.data) {
    return {
      data: module.data,
      activities: module.activities || [],
    };
  }

  // ===================================================
  // DEFAULT EXPORT SUPPORT
  // ===================================================

  if (module.default && module.default.data) {
    if (isCustom) {
      return {
        data: module.default.data,
        activities: module.default.activities || [],
      };
    }

    if (module.default.activities) {
      return {
        data: module.default.data,
        activities: module.default.activities,
      };
    }
  }

  // ===================================================
  // INVALID CONFIG
  // ===================================================

  console.error("CONFIG FOUND BUT INVALID:", {
    pathname,
    jsPath,
    jsxPath,
    isCustom,
    moduleKeys: Object.keys(module),
    hasData: Boolean(module?.data),
    hasActivities: Boolean(module?.activities),
    hasDefault: Boolean(module?.default),
    defaultKeys: module?.default
      ? Object.keys(module.default)
      : [],
  });

  return null;
};

// =====================================================
// COMPONENT
// =====================================================

const PackagePage = () => {
  const location = useLocation();

  const config = findConfig(location.pathname);

  // ===================================================
  // CONFIG NOT FOUND / INVALID
  // ===================================================

  if (!config) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#111",
          color: "white",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>Package config not found</h2>

        <p>
          Current route:
          <strong> {location.pathname}</strong>
        </p>
      </div>
    );
  }

  // ===================================================
  // SAFETY CHECK
  // ===================================================

  if (!config.data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#111",
          color: "white",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>Package data is missing</h2>

        <p>
          Current route:
          <strong> {location.pathname}</strong>
        </p>
      </div>
    );
  }

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <LevelThreePage
      data={config.data}
      activities={config.activities}
    />
  );
};

export default PackagePage;