const DEFAULT_START_DATE = "2026-09-14";
const TOTAL_WEEKS = 17;
const DAY_NAMES = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
const DAY_SHORT = ["一", "二", "三", "四", "五", "六", "日"];

const PERIOD_TIMES = [
  ["08:30", "09:10"],
  ["09:15", "09:55"],
  ["10:10", "10:50"],
  ["10:55", "11:35"],
  ["11:35", "13:05"],
  ["13:10", "13:50"],
  ["13:55", "14:35"],
  ["14:45", "15:25"],
  ["15:30", "16:10"],
  ["16:15", "16:55"],
  ["18:00", "18:40"],
  ["18:45", "19:25"],
  ["19:30", "20:10"],
];

const weekRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const courseSessions = [
  {
    id: "mon-biochem-onsite",
    course: "生物化学A",
    day: 1,
    start: 3,
    end: 4,
    weeks: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17],
    room: "南6A503",
    teacher: "袁兴宇",
    mode: "线下",
  },
  {
    id: "mon-biochem-online",
    course: "生物化学A",
    day: 1,
    start: 3,
    end: 4,
    weeks: [14],
    room: "网课（富春）",
    teacher: "袁兴宇",
    mode: "线上",
  },
  {
    id: "mon-medicinal-chem",
    course: "药用植物化学",
    day: 1,
    start: 6,
    end: 7,
    weeks: [...weekRange(1, 3), ...weekRange(5, 17)],
    room: "南6A211",
    teacher: "何洁",
    mode: "线下",
  },
  {
    id: "tue-policy",
    course: "形势与政策B（Ⅲ）",
    day: 2,
    start: 11,
    end: 12,
    weeks: [14, 15],
    room: "北3C303",
    teacher: "袁亚",
    mode: "线下",
  },
  {
    id: "tue-reform-history",
    course: "改革开放史",
    day: 2,
    start: 11,
    end: 13,
    weeks: weekRange(1, 5),
    room: "北3B104",
    teacher: "宋增元",
    mode: "线下",
  },
  {
    id: "tue-thought-onsite",
    course: "习近平新时代中国特色社会主义思想概论",
    day: 2,
    start: 6,
    end: 8,
    weeks: [...weekRange(1, 3), ...weekRange(5, 13), 15],
    room: "南6B408",
    teacher: "于雯美",
    mode: "线下",
  },
  {
    id: "tue-thought-online",
    course: "习近平新时代中国特色社会主义思想概论",
    day: 2,
    start: 6,
    end: 8,
    weeks: [14, 16, 17],
    room: "网课（富春）",
    teacher: "于雯美",
    mode: "线上",
  },
  {
    id: "tue-physiology",
    course: "生理学C",
    day: 2,
    start: 9,
    end: 10,
    weeks: [...weekRange(1, 3), ...weekRange(5, 17)],
    room: "南6A303",
    teacher: "王勤",
    mode: "线下",
  },
  {
    id: "wed-biochem-onsite",
    course: "生物化学A",
    day: 3,
    start: 1,
    end: 2,
    weeks: [1, 2, 5, 7, 8, 10, 12, 13, 14, 15, 17],
    room: "南6A503",
    teacher: "袁兴宇",
    mode: "线下",
  },
  {
    id: "wed-biochem-online",
    course: "生物化学A",
    day: 3,
    start: 1,
    end: 2,
    weeks: [3, 6, 9, 11, 16],
    room: "网课（富春）",
    teacher: "袁兴宇",
    mode: "线上",
  },
  {
    id: "wed-physiology-online",
    course: "生理学C",
    day: 3,
    start: 3,
    end: 4,
    weeks: [6, 8, 10, 12],
    room: "网课（富春）",
    teacher: "王勤",
    mode: "线上",
  },
  {
    id: "wed-microbiology",
    course: "医学微生物学B",
    day: 3,
    start: 3,
    end: 5,
    weeks: [2],
    room: "南6A211",
    teacher: "李稀罕",
    mode: "线下",
  },
  {
    id: "wed-policy-short",
    course: "形势与政策B（Ⅲ）",
    day: 3,
    start: 6,
    end: 6,
    weeks: [14, 15],
    room: "网课（富春）",
    teacher: "袁亚",
    mode: "线上",
  },
  {
    id: "wed-policy-long",
    course: "形势与政策B（Ⅲ）",
    day: 3,
    start: 6,
    end: 7,
    weeks: [5],
    room: "网课（富春）",
    teacher: "袁亚",
    mode: "线上",
  },
  {
    id: "wed-innovation-onsite-1",
    course: "创新创业基础A",
    day: 3,
    start: 11,
    end: 13,
    weeks: [2, 12, 13],
    room: "北3D102",
    teacher: "张娇娇",
    mode: "线下",
  },
  {
    id: "wed-innovation-online",
    course: "创新创业基础A",
    day: 3,
    start: 11,
    end: 13,
    weeks: [3, 6, 8, 10, 11],
    room: "网课（富春）",
    teacher: "张娇娇",
    mode: "线上",
  },
  {
    id: "wed-innovation-onsite-2",
    course: "创新创业基础A",
    day: 3,
    start: 11,
    end: 13,
    weeks: [5, 7, 9],
    room: "北2A213",
    teacher: "张娇娇",
    mode: "线下",
  },
  {
    id: "thu-microbiology",
    course: "医学微生物学B",
    day: 4,
    start: 1,
    end: 3,
    weeks: weekRange(11, 17),
    room: "南6A203",
    teacher: "李稀罕",
    mode: "线下",
  },
  {
    id: "thu-lab-safety-onsite",
    course: "医学实验室管理与安全",
    day: 4,
    start: 3,
    end: 4,
    weeks: [1, 7, 8, 9],
    room: "南6A503",
    teacher: "胡晓芬",
    mode: "线下",
  },
  {
    id: "thu-lab-safety-online",
    course: "医学实验室管理与安全",
    day: 4,
    start: 3,
    end: 4,
    weeks: [2, 4, 5, 6],
    room: "网课（富春）",
    teacher: "胡晓芬",
    mode: "线上",
  },
  {
    id: "thu-pe",
    course: "保健体育（Ⅲ）",
    day: 4,
    start: 11,
    end: 12,
    weeks: [1, 2, ...weekRange(4, 17)],
    room: "富春-南区田径场",
    teacher: "陆晟",
    mode: "线下",
    category: "实践",
  },
  {
    id: "fri-microbiology",
    course: "医学微生物学B",
    day: 5,
    start: 1,
    end: 3,
    weeks: weekRange(4, 11),
    room: "南6A203",
    teacher: "李稀罕",
    mode: "线下",
  },
  {
    id: "fri-medicinal-chem",
    course: "药用植物化学",
    day: 5,
    start: 3,
    end: 3,
    weeks: [1],
    room: "北3A401",
    teacher: "何洁",
    mode: "线下",
  },
  {
    id: "fri-biochem-lab",
    course: "生物化学实验技术",
    day: 5,
    start: 6,
    end: 13,
    weeks: weekRange(6, 11),
    room: "南7B109",
    teacher: "按周次安排",
    teacherByWeek: {
      6: "郝杰、袁兴宇",
      7: "钱倩宇、陈林",
      8: "郝杰、乐翊飞",
      9: "钱倩宇、卢德赵",
      10: "郝杰、钱倩宇",
      11: "钱倩宇、王萃",
    },
    mode: "线下",
    category: "实验",
  },
  {
    id: "sat-medicinal-chem-am",
    course: "药用植物化学",
    day: 6,
    start: 2,
    end: 4,
    weeks: [9, 11],
    room: "南7B109",
    teacher: "何洁、郝杰",
    mode: "线下",
    category: "实验",
  },
  {
    id: "sat-medicinal-chem-week11",
    course: "药用植物化学",
    day: 6,
    start: 6,
    end: 9,
    weeks: [11],
    room: "南7B109",
    teacher: "何洁、郝杰",
    mode: "线下",
    category: "实验",
  },
  {
    id: "sat-medicinal-chem-week9",
    course: "药用植物化学",
    day: 6,
    start: 6,
    end: 10,
    weeks: [9],
    room: "南7B109",
    teacher: "何洁、郝杰",
    mode: "线下",
    category: "实验",
  },
];

const otherCourses = [
  {
    id: "modern-literature",
    course: "中国现代文学名家名作（尔雅通识）",
    weeks: weekRange(3, 13),
    description: "尔雅通识，共 11 周",
    contact: "86603153",
  },
];

const state = {
  firstWeekDate: localStorage.getItem("course-first-week") || DEFAULT_START_DATE,
  selectedWeek: null,
};

const elements = {
  weekLabel: document.querySelector("#weekLabel"),
  weekButton: document.querySelector("#weekButton"),
  previousWeek: document.querySelector("#previousWeek"),
  nextWeek: document.querySelector("#nextWeek"),
  monthLabel: document.querySelector("#monthLabel"),
  dayHeads: document.querySelector("#dayHeads"),
  timeAxis: document.querySelector("#timeAxis"),
  weekGrid: document.querySelector("#weekGrid"),
  otherCourses: document.querySelector("#otherCourses"),
  otherCourseList: document.querySelector("#otherCourseList"),
  sheetBackdrop: document.querySelector("#sheetBackdrop"),
  detailSheet: document.querySelector("#detailSheet"),
  detailKicker: document.querySelector("#detailKicker"),
  detailTitle: document.querySelector("#detailTitle"),
  detailBody: document.querySelector("#detailBody"),
  settingsSheet: document.querySelector("#settingsSheet"),
  installSheet: document.querySelector("#installSheet"),
  settingsButton: document.querySelector("#settingsButton"),
  installHintButton: document.querySelector("#installHintButton"),
  startDateInput: document.querySelector("#startDateInput"),
  saveSettings: document.querySelector("#saveSettings"),
  resetSettings: document.querySelector("#resetSettings"),
  toast: document.querySelector("#toast"),
};

function localDateFromISO(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
}

function addDays(date, amount) {
  const result = new Date(date);
  result.setDate(result.getDate() + amount);
  return result;
}

function dateForWeekDay(week, day) {
  return addDays(localDateFromISO(state.firstWeekDate), (week - 1) * 7 + day - 1);
}

function getCurrentWeek(date = new Date()) {
  const firstWeek = localDateFromISO(state.firstWeekDate);
  const daysSinceStart = Math.floor(
    (startOfDay(date).getTime() - startOfDay(firstWeek).getTime()) / 86400000,
  );
  return Math.max(1, Math.min(TOTAL_WEEKS, Math.floor(daysSinceStart / 7) + 1));
}

function formatMonthDay(date) {
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function periodLabel(session) {
  return session.start === session.end
    ? `第 ${session.start} 节`
    : `${session.start}-${session.end} 节`;
}

function timeLabel(session) {
  return `${PERIOD_TIMES[session.start - 1][0]} - ${PERIOD_TIMES[session.end - 1][1]}`;
}

function teacherForWeek(session, week) {
  return session.teacherByWeek?.[week] || session.teacher;
}

function isSameDate(left, right) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function coursePalette(course) {
  const palettes = [
    { background: "#efedff", border: "#9d90e8", ink: "#6f61a8" },
    { background: "#e8f7f3", border: "#83cfc1", ink: "#348d7d" },
    { background: "#eef4ff", border: "#9ebce9", ink: "#5d80b3" },
    { background: "#fff1df", border: "#eeb785", ink: "#ad7a49" },
    { background: "#fbeaf3", border: "#e4a7c2", ink: "#a16682" },
    { background: "#eef2e5", border: "#b5c894", ink: "#768b57" },
    { background: "#f6eadf", border: "#d5ad8e", ink: "#987052" },
  ];
  let hash = 0;
  for (const character of course) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }
  return palettes[hash % palettes.length];
}

function shortCourseName(course) {
  return course;
}

function splitSessionClusters(sessions) {
  const clusters = [];
  for (const session of [...sessions].sort((a, b) => a.start - b.start || b.end - a.end)) {
    const lastCluster = clusters.at(-1);
    if (!lastCluster || session.start > lastCluster.end) {
      clusters.push({ start: session.start, end: session.end, sessions: [session] });
    } else {
      lastCluster.end = Math.max(lastCluster.end, session.end);
      lastCluster.sessions.push(session);
    }
  }
  return clusters;
}

function renderCourseBlock(session, { ghost = false } = {}) {
  const span = session.end - session.start + 1;
  const palette = coursePalette(session.course);
  const style = [
    `top:calc((${session.start - 1}) * var(--period-height) + 3px)`,
    `height:calc(${span} * var(--period-height) - 6px)`,
    "left:2px",
    "width:calc(100% - 4px)",
    `--course-bg:${palette.background}`,
    `--course-border:${palette.border}`,
    `--course-ink:${palette.ink}`,
  ].join(";");
  const room = span >= 2 ? `<span class="course-room">${session.room}</span>` : "";
  const label = ghost
    ? `<span class="ghost-label">非本周</span>`
    : `<span class="period-count">${span}</span>`;
  return `
    <button
      class="course-block${ghost ? " is-ghost" : ""}"
      type="button"
      data-session-id="${session.id}"
      style="${style}"
      aria-label="${ghost ? "非本周，" : ""}${session.course}，${periodLabel(session)}"
    >
      ${label}
      <strong>${shortCourseName(session.course)}</strong>
      ${room}
    </button>
  `;
}

function renderDayColumn(day) {
  const sessions = courseSessions.filter((session) => session.day === day);
  const clusters = splitSessionClusters(sessions);
  const blocks = clusters.flatMap((cluster) => {
    const active = cluster.sessions
      .filter((session) => session.weeks.includes(state.selectedWeek))
      .sort((a, b) => a.start - b.start || b.end - a.end);

    if (active.length === 0) {
      const representative = [...cluster.sessions].sort(
        (a, b) => b.weeks.length - a.weeks.length || b.end - b.start - (a.end - a.start),
      )[0];
      return [renderCourseBlock(representative, { ghost: true })];
    }

    return active.map((session) => renderCourseBlock(session));
  });

  const today = new Date();
  const date = dateForWeekDay(state.selectedWeek, day);
  const isToday = state.selectedWeek === getCurrentWeek(today) && isSameDate(date, today);
  return `<div class="day-column${isToday ? " is-today" : ""}" data-day="${day}">${blocks.join("")}</div>`;
}

function render() {
  const currentWeek = getCurrentWeek();
  const today = new Date();
  const monday = dateForWeekDay(state.selectedWeek, 1);

  elements.weekLabel.textContent = `第 ${state.selectedWeek} 周`;
  elements.previousWeek.disabled = state.selectedWeek === 1;
  elements.nextWeek.disabled = state.selectedWeek === TOTAL_WEEKS;
  elements.monthLabel.textContent = `${monday.getMonth() + 1}月`;

  elements.dayHeads.innerHTML = DAY_SHORT.map((label, index) => {
    const day = index + 1;
    const date = dateForWeekDay(state.selectedWeek, day);
    const isToday = state.selectedWeek === currentWeek && isSameDate(date, today);
    const crossesMonth = index > 0 && date.getDate() === 1;
    return `
      <div class="day-head${isToday ? " is-today" : ""}" aria-label="${DAY_NAMES[index]} ${formatMonthDay(date)}">
        <strong>${label}</strong>
        <i class="date-number">${date.getDate()}</i>
        ${crossesMonth ? `<em>${date.getMonth() + 1}月</em>` : ""}
      </div>
    `;
  }).join("");

  elements.timeAxis.innerHTML = PERIOD_TIMES.map(
    ([start, end], index) => `
      <div class="time-cell">
        <strong>${index + 1}</strong>
        <span>${start}</span>
        <span>${end}</span>
      </div>
    `,
  ).join("");

  elements.weekGrid.innerHTML = Array.from({ length: 7 }, (_, index) =>
    renderDayColumn(index + 1),
  ).join("");

  const activeOtherCourses = otherCourses.filter((course) =>
    course.weeks.includes(state.selectedWeek),
  );
  elements.otherCourses.hidden = activeOtherCourses.length === 0;
  elements.otherCourseList.innerHTML = activeOtherCourses
    .map(
      (course) => `
        <article class="other-card">
          <h3>${course.course}</h3>
          <p>${course.description}</p>
          <p>第 ${course.weeks[0]}-${course.weeks.at(-1)} 周 · 联系电话 ${course.contact}</p>
        </article>
      `,
    )
    .join("");
}

function openSheet(sheet) {
  closeSheets();
  elements.sheetBackdrop.hidden = false;
  sheet.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeSheets() {
  elements.detailSheet.hidden = true;
  elements.settingsSheet.hidden = true;
  elements.installSheet.hidden = true;
  elements.sheetBackdrop.hidden = true;
  document.body.style.overflow = "";
}

function showCourseDetail(sessionId) {
  const session = courseSessions.find((item) => item.id === sessionId);
  if (!session) return;

  const isActive = session.weeks.includes(state.selectedWeek);
  elements.detailKicker.textContent = `${isActive ? `第 ${state.selectedWeek} 周` : "非本周"} · ${DAY_NAMES[session.day - 1]}`;
  elements.detailTitle.textContent = session.course;
  const spansMultipleWeeks = session.weeks.length > 1;
  elements.detailBody.innerHTML = `
    <div class="detail-grid">
      <div class="detail-item">
        <small>节次</small>
        <strong>${periodLabel(session)}</strong>
      </div>
      <div class="detail-item">
        <small>时间</small>
        <strong>${timeLabel(session)}</strong>
      </div>
      <div class="detail-item">
        <small>场地</small>
        <strong>${session.room}</strong>
      </div>
      <div class="detail-item">
        <small>教师</small>
        <strong>${teacherForWeek(session, state.selectedWeek)}</strong>
      </div>
      <div class="detail-item wide">
        <small>上课周次</small>
        <p>${spansMultipleWeeks ? `第 ${session.weeks.join("、")} 周` : `仅第 ${session.weeks[0]} 周`}</p>
      </div>
      <div class="detail-item wide">
        <small>授课方式</small>
        <p>${session.mode}${session.category ? ` · ${session.category}课` : ""}</p>
      </div>
    </div>
  `;
  openSheet(elements.detailSheet);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 1800);
}

function moveWeek(direction) {
  const nextWeek = state.selectedWeek + direction;
  if (nextWeek < 1 || nextWeek > TOTAL_WEEKS) return;
  state.selectedWeek = nextWeek;
  render();
}

elements.previousWeek.addEventListener("click", () => moveWeek(-1));
elements.nextWeek.addEventListener("click", () => moveWeek(1));
elements.weekButton.addEventListener("click", () => {
  state.selectedWeek = getCurrentWeek();
  render();
});

elements.weekGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-session-id]");
  if (button) showCourseDetail(button.dataset.sessionId);
});

elements.settingsButton.addEventListener("click", () => {
  elements.startDateInput.value = state.firstWeekDate;
  openSheet(elements.settingsSheet);
});

elements.installHintButton.addEventListener("click", () => openSheet(elements.installSheet));

elements.saveSettings.addEventListener("click", () => {
  if (!elements.startDateInput.value) {
    showToast("请选择一个日期");
    return;
  }
  state.firstWeekDate = elements.startDateInput.value;
  localStorage.setItem("course-first-week", state.firstWeekDate);
  state.selectedWeek = getCurrentWeek();
  render();
  closeSheets();
  showToast("学期起始日已保存");
});

elements.resetSettings.addEventListener("click", () => {
  state.firstWeekDate = DEFAULT_START_DATE;
  localStorage.removeItem("course-first-week");
  elements.startDateInput.value = DEFAULT_START_DATE;
  state.selectedWeek = getCurrentWeek();
  render();
  showToast("已恢复默认日期");
});

document.querySelectorAll("[data-close-sheet]").forEach((button) => {
  button.addEventListener("click", closeSheets);
});
elements.sheetBackdrop.addEventListener("click", closeSheets);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSheets();
});

state.selectedWeek = getCurrentWeek();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
