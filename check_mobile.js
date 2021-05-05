function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if(isMobile()){
    alert("모바일 모드에서는 UI가 깨질 수 있습니다. 데스크톱 버전으로 보시는 것을 추천드립니다.")
}

