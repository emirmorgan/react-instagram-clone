const LoginGetApp = () => {
  const AppStore = {
    src: "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png",
    href: "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo",
    alt: "Download on the App Store",
  };
  const GooglePlay = {
    src: "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png",
    href: "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D832034DA-8446-453C-B0C9-051A8B36E973%26utm_content%3Dlo%26utm_medium%3Dbadge",
    alt: "Get it on Google Play",
  };
  const MicrosoftStore = {
    src: "https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png",
    href: "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=1537%2C-215%2C1918%2C1038",
    alt: "Get it from Microsoft",
  };

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-sm mx-[20px] my-[10px]">Get the app.</p>
      <div className="flex my-[10px]">
        <a className="mr-2" href={AppStore.href}>
          <img src={AppStore.src} alt={AppStore.alt} className="h-10" />
        </a>
        <a href={GooglePlay.href}>
          <img src={GooglePlay.src} alt={GooglePlay.alt} className="h-10" />
        </a>
      </div>
    </div>
  );
};

export default LoginGetApp;
