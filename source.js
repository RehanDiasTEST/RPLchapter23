const data = require("jadwal.json"); // Ganti dengan path yang sesuai

const weekdays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
const saturdayTimes = ["07:00 - 09:29", "09:30 - 11:59", "12:00 - 14:29"];

// Mengacak urutan elemen dalam array
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// Mendapatkan mata kuliah unik berdasarkan hari
function getUniqueCoursesForDay(day, currentCourses) {
	const availableCourses = data.mata_kuliah.filter(
		(course) => course.hari === day && !currentCourses.includes(course.nama)
	);
	return availableCourses;
}

// Menghasilkan kemungkinan jadwal
function generateRandomSchedule() {
	const selectedCourses = [];
	const schedule = [];

	const shuffledWeekdays = shuffleArray([...weekdays]);

	shuffledWeekdays.forEach((day) => {
		const availableCourses = getUniqueCoursesForDay(day, selectedCourses);
		if (availableCourses.length > 0) {
			const selectedCourse =
				availableCourses[Math.floor(Math.random() * availableCourses.length)];
			selectedCourses.push(selectedCourse.nama);
			schedule.push({
				Hari: day,
				Mata_Kuliah: selectedCourse.nama,
				Jam: selectedCourse.jam,
				Ruang: selectedCourse.ruang,
			});
		}
	});

	const saturdayCoursesAvailable = data.mata_kuliah.filter(
		(course) => course.hari === "Sabtu"
	);

	saturdayTimes.forEach((time) => {
		const availableCourses = saturdayCoursesAvailable.filter(
			(course) => !selectedCourses.includes(course.nama) && course.jam === time
		);
		if (availableCourses.length > 0) {
			const selectedCourse =
				availableCourses[Math.floor(Math.random() * availableCourses.length)];
			selectedCourses.push(selectedCourse.nama);
			schedule.push({
				Hari: "Sabtu",
				Mata_Kuliah: selectedCourse.nama,
				Jam: selectedCourse.jam,
				Ruang: selectedCourse.ruang,
			});
		}
	});

	return schedule;
}

// Menghasilkan berbagai kemungkinan jadwal yang unik
function generateUniqueSchedules(numSchedules) {
	const uniqueSchedules = new Set();

	const dayOrder = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

	while (uniqueSchedules.size < numSchedules) {
		const schedule = generateRandomSchedule();
		const sortedSchedule = schedule.sort((a, b) => {
			const dayA = dayOrder.indexOf(a.Hari);
			const dayB = dayOrder.indexOf(b.Hari);
			if (dayA === dayB) {
				const timeA = a.Jam.split(" - ")[0];
				const timeB = b.Jam.split(" - ")[0];
				return timeA.localeCompare(timeB);
			}
			return dayA - dayB;
		});
		uniqueSchedules.add(JSON.stringify(sortedSchedule));
	}

	return Array.from(uniqueSchedules).map((scheduleStr) =>
		JSON.parse(scheduleStr)
	);
}

// Menghasilkan dan mencetak berbagai kemungkinan jadwal yang unik
const numSchedules = 5; // Ubah sesuai dengan jumlah kemungkinan yang Anda inginkan
const possibleSchedules = generateUniqueSchedules(numSchedules);

console.log(`Berbagai Kemungkinan Jadwal (${numSchedules} Kemungkinan):\n`);
possibleSchedules.forEach((schedule, index) => {
	console.log(`Kemungkinan ${index + 1}:`);
	console.table(schedule);
	console.log("\n");
});
