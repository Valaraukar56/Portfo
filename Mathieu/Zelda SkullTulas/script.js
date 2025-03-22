document.addEventListener("DOMContentLoaded", function () {
	// Initialize the app
	initializeApp();

	// Tab switching functionality
	const tabButtons = document.querySelectorAll(".tab-btn");
	const tabContents = document.querySelectorAll(".tab-content");

	tabButtons.forEach((button) => {
		button.addEventListener("click", () => {
			// Remove active class from all buttons and contents
			tabButtons.forEach((btn) => btn.classList.remove("active"));
			tabContents.forEach((content) => content.classList.remove("active"));

			// Add active class to clicked button and corresponding content
			button.classList.add("active");
			const tabId = button.getAttribute("data-tab");
			document.getElementById(tabId).classList.add("active");

			// Save active tab to localStorage
			localStorage.setItem("activeTab", tabId);
		});
	});

	// Checkbox event listeners
	const checkboxes = document.querySelectorAll(
		'input[type="checkbox"]:not([disabled])'
	);
	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", function () {
			// Save checkbox state
			const checkboxId = this.getAttribute("data-id");
			saveCheckboxState(checkboxId, this.checked);

			// Update progress
			updateProgress();
		});
	});

	// Reset button functionality
	const resetButton = document.getElementById("resetBtn");
	resetButton.addEventListener("click", function () {
		if (
			confirm("Êtes-vous sûr de vouloir réinitialiser toute votre progression ?")
		) {
			resetProgress();
		}
	});

	// Load saved tab
	const savedTab = localStorage.getItem("activeTab");
	if (savedTab) {
		document.querySelector(`.tab-btn[data-tab="${savedTab}"]`).click();
	}
});

// Initialize the app
function initializeApp() {
	// Load saved checkbox states
	loadCheckboxStates();

	// Update progress indicators
	updateProgress();
}

// Save checkbox state to localStorage
function saveCheckboxState(id, isChecked) {
	const savedStates = JSON.parse(
		localStorage.getItem("skulltulaStates") || "{}"
	);
	savedStates[id] = isChecked;
	localStorage.setItem("skulltulaStates", JSON.stringify(savedStates));
}

// Load checkbox states from localStorage
function loadCheckboxStates() {
	const savedStates = JSON.parse(
		localStorage.getItem("skulltulaStates") || "{}"
	);

	// Apply saved states to checkboxes
	Object.keys(savedStates).forEach((id) => {
		const checkbox = document.querySelector(`input[data-id="${id}"]`);
		if (checkbox) {
			checkbox.checked = savedStates[id];
		}
	});
}

// Update progress indicators
function updateProgress() {
	// Update location progress
	const locations = document.querySelectorAll(".location");
	let totalChecked = 0;
	let totalCheckboxes = 0;

	locations.forEach((location) => {
		const checkboxes = location.querySelectorAll(
			'input[type="checkbox"]:not([disabled])'
		);
		const checkedBoxes = location.querySelectorAll(
			'input[type="checkbox"]:not([disabled]):checked'
		);

		const progressElement = location.querySelector(".location-progress");
		if (progressElement) {
			progressElement.textContent = `${checkedBoxes.length}/${checkboxes.length}`;
		}

		totalChecked += checkedBoxes.length;
		totalCheckboxes += checkboxes.length;
	});

	// Update total progress
	const progressFill = document.querySelector(".progress-fill");
	const progressText = document.getElementById("progressText");

	if (totalCheckboxes > 0) {
		const percentage = (totalChecked / totalCheckboxes) * 100;
		progressFill.style.width = `${percentage}%`;
		progressText.textContent = `${totalChecked}/${totalCheckboxes} Skulltulas`;
	}
}

// Reset all progress
function resetProgress() {
	// Clear localStorage
	localStorage.removeItem("skulltulaStates");

	// Uncheck all checkboxes
	const checkboxes = document.querySelectorAll(
		'input[type="checkbox"]:not([disabled])'
	);
	checkboxes.forEach((checkbox) => {
		checkbox.checked = false;
	});

	// Update progress
	updateProgress();
}
