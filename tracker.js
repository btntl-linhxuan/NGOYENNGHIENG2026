const API_URL = "https://script.google.com/macros/s/AKfycby3116ETInMjyfUzmdYWp0szQbzOm3r-WeJOOri27dFMbGq1iuBgM4N2fa9nlhyF62Hzw/exec";

function logPageVisit(pageTitle) {
    const userName = localStorage.getItem("camp_user_name") || "Khách vãng lai";
    const userAgent = navigator.userAgent; // Lấy thông tin thiết bị/trình duyệt chuẩn
  
    fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        action: "log_visit",
        pageTitle: pageTitle || document.title,
        userName: userName,
        userAgent: userAgent
      })
    }).catch(err => console.error("Lỗi log visit:", err));
}