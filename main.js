
const translations = {
  en: {
    title: "Welcome to FreedomEagle",
    profile_title: "Create Your Profile",
    name: "Name:",
    email: "Email:",
    avatar: "Avatar URL:",
    submit: "Create Profile",
    your_profile: "Your Profile"
  },
  ru: {
    title: "Добро пожаловать в FreedomEagle",
    profile_title: "Создайте свой профиль",
    name: "Имя:",
    email: "Эл. почта:",
    avatar: "Ссылка на аватар:",
    submit: "Создать профиль",
    your_profile: "Ваш профиль"
  }
};

const languageSelect = document.getElementById("languageSelect");

function updateTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

languageSelect.addEventListener("change", () => {
  updateTranslations(languageSelect.value);
});

document.addEventListener("DOMContentLoaded", () => {
  updateTranslations(languageSelect.value);

  const form = document.getElementById("profileForm");
  const display = document.getElementById("profileDisplay");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const avatar = document.getElementById("avatar").value;

    localStorage.setItem("freedomeagle-profile", JSON.stringify({ name, email, avatar }));

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayAvatar").src = avatar || "https://via.placeholder.com/100";

    display.classList.remove("hidden");
  });

  // Автоматическая загрузка из localStorage
  const saved = localStorage.getItem("freedomeagle-profile");
  if (saved) {
    const { name, email, avatar } = JSON.parse(saved);
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayAvatar").src = avatar || "https://via.placeholder.com/100";
    display.classList.remove("hidden");
  }
});
