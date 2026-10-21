document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("themeButton");
    const languageButton = document.getElementById("languageButton");

    let darkMode = false;
    let currentLanguage = "es";

    // CAMBIAR ENTRE MODO CLARO Y OSCURO
    themeButton.addEventListener("click", function () {
        darkMode = !darkMode;

        document.body.classList.toggle("dark", darkMode);

        themeButton.textContent = darkMode
            ? (currentLanguage === "es" ? "☀️ Modo claro" : "☀️ Light mode")
            : (currentLanguage === "es" ? "🌙 Modo oscuro" : "🌙 Dark mode");
    });

    languageButton.addEventListener("click", function () {
        currentLanguage = currentLanguage === "es" ? "en" : "es";

        document.documentElement.lang = currentLanguage;

        document.querySelectorAll("[data-es][data-en]").forEach(function (element) {
            element.textContent = element.getAttribute(
                currentLanguage === "es" ? "data-es" : "data-en"
            );
        });

        languageButton.textContent = currentLanguage === "es"
            ? "🇬🇧 English"
            : "🇪🇸 Español";

        themeButton.textContent = darkMode
            ? (currentLanguage === "es" ? "☀️ Modo claro" : "☀️ Light mode")
            : (currentLanguage === "es" ? "🌙 Modo oscuro" : "🌙 Dark mode");
    });

    console.log("Vida Felina: botones inicializados correctamente.");
});
