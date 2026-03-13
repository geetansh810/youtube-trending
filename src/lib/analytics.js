// Analytics - visit tracking stored in localStorage
export const ANALYTICS_KEY = 'yt_trending_analytics';

export function getAnalytics() {
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY);
    return raw ? JSON.parse(raw) : getDefaultAnalytics();
  } catch {
    return getDefaultAnalytics();
  }
}

function getDefaultAnalytics() {
  return {
    totalVisits: 0,
    todayVisits: 0,
    lastVisitDate: null,
    lastVisitTime: null,
    regionHistory: {},
    categoryHistory: {},
    videosWatched: 0,
    sessionStart: null,
    weeklyData: Array(7).fill(0),
    weeklyDates: getWeekDates(),
  };
}

function getWeekDates() {
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}

export function recordVisit() {
  const analytics = getAnalytics();
  const today = new Date().toISOString().slice(0, 10);
  const now = new Date().toISOString();

  analytics.totalVisits += 1;
  analytics.lastVisitTime = now;
  analytics.sessionStart = now;

  if (analytics.lastVisitDate !== today) {
    analytics.todayVisits = 1;
    analytics.lastVisitDate = today;
  } else {
    analytics.todayVisits += 1;
  }

  // Update weekly data
  analytics.weeklyDates = getWeekDates();
  analytics.weeklyData = analytics.weeklyDates.map((d, i) => {
    if (d === today) return (analytics.weeklyData[i] || 0) + 1;
    return analytics.weeklyData[i] || 0;
  });

  saveAnalytics(analytics);
  return analytics;
}

export function recordRegion(region) {
  const analytics = getAnalytics();
  analytics.regionHistory[region] = (analytics.regionHistory[region] || 0) + 1;
  saveAnalytics(analytics);
}

export function recordCategory(category) {
  const analytics = getAnalytics();
  analytics.categoryHistory[category] = (analytics.categoryHistory[category] || 0) + 1;
  saveAnalytics(analytics);
}

export function recordVideoWatch() {
  const analytics = getAnalytics();
  analytics.videosWatched = (analytics.videosWatched || 0) + 1;
  saveAnalytics(analytics);
  return analytics;
}

function saveAnalytics(data) {
  try {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
  } catch {}
}
