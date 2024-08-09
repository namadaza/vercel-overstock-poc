import Script from "next/script";

function AppScripts() {
  return (
    <>
      <Script id="app-loader">
        {`(function() {
  function asyncLoad() {
    var urls = ["https://cdn.tapcart.com/webbridge-sdk/webbridge.umd.js?shop=a37a28-2.myshopify.com","https://assets.tapcart.com/__tc-ck-loader/index.js?appId=CeeweiHh1L\u0026environment=production\u0026shop=a37a28-2.myshopify.com","//cdn.shopify.com/proxy/3b78d0c73fafccdc56f608bc60a9d06abec748d32dc6f56c8c07955673068d06/r4.cloud.yellow.ai/api/galaxy/genericIntegration/shopify-sdk/x1711463078876/overstock_production?id=BcOZghlvRm/xDQ%2B5JyfxeLa8DrKFvlDs8l8ARsN2MrA=\u0026shop=a37a28-2.myshopify.com\u0026sp-cache-control=cHVibGljLCBtYXgtYWdlPTkwMA","https://js.appboycdn.com/shopify-scripts/0.2.0/braze-product-script.min.js?product_click=true\u0026product_view=true\u0026shop_domain=a37a28-2.myshopify.com\u0026shop=a37a28-2.myshopify.com","https://js.appboycdn.com/shopify-scripts/0.2.0/braze-web-sdk-script.min.js?api_key=dc9d7751-8184-4d73-92ba-bc7abcb22008\u0026content_cards=false\u0026in_browser_msgs=false\u0026sdk_url=sdk.iad-03.braze.com\u0026shop=a37a28-2.myshopify.com","https://js.appboycdn.com/shopify-scripts/0.2.0/braze-cart-script.min.js?api_key=dc9d7751-8184-4d73-92ba-bc7abcb22008\u0026sdk_url=sdk.iad-03.braze.com\u0026shop=a37a28-2.myshopify.com\u0026shop=a37a28-2.myshopify.com","https://js.appboycdn.com/shopify-scripts/0.2.0/braze-checkout-script.min.js?api_key=dc9d7751-8184-4d73-92ba-bc7abcb22008\u0026sdk_url=sdk.iad-03.braze.com\u0026shop=a37a28-2.myshopify.com\u0026shop=a37a28-2.myshopify.com","https://js.appboycdn.com/shopify-scripts/0.2.0/braze-email-script.min.js?api_key=dc9d7751-8184-4d73-92ba-bc7abcb22008\u0026sdk_url=sdk.iad-03.braze.com\u0026shop=a37a28-2.myshopify.com\u0026shop=a37a28-2.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();`}
      </Script>
      <Script id="init-braze">{`+function(a,p,P,b,y){a.braze={};a.brazeQueue=[];for(var s="BrazeSdkMetadata DeviceProperties Card Card.prototype.dismissCard Card.prototype.removeAllSubscriptions Card.prototype.removeSubscription Card.prototype.subscribeToClickedEvent Card.prototype.subscribeToDismissedEvent Card.fromContentCardsJson ImageOnly CaptionedImage ClassicCard ControlCard ContentCards ContentCards.prototype.getUnviewedCardCount Feed Feed.prototype.getUnreadCardCount ControlMessage InAppMessage InAppMessage.SlideFrom InAppMessage.ClickAction InAppMessage.DismissType InAppMessage.OpenTarget InAppMessage.ImageStyle InAppMessage.Orientation InAppMessage.TextAlignment InAppMessage.CropType InAppMessage.prototype.closeMessage InAppMessage.prototype.removeAllSubscriptions InAppMessage.prototype.removeSubscription InAppMessage.prototype.subscribeToClickedEvent InAppMessage.prototype.subscribeToDismissedEvent InAppMessage.fromJson FullScreenMessage ModalMessage HtmlMessage SlideUpMessage User User.Genders User.NotificationSubscriptionTypes User.prototype.addAlias User.prototype.addToCustomAttributeArray User.prototype.addToSubscriptionGroup User.prototype.getUserId User.prototype.getUserId User.prototype.incrementCustomUserAttribute User.prototype.removeFromCustomAttributeArray User.prototype.removeFromSubscriptionGroup User.prototype.setCountry User.prototype.setCustomLocationAttribute User.prototype.setCustomUserAttribute User.prototype.setDateOfBirth User.prototype.setEmail User.prototype.setEmailNotificationSubscriptionType User.prototype.setFirstName User.prototype.setGender User.prototype.setHomeCity User.prototype.setLanguage User.prototype.setLastKnownLocation User.prototype.setLastName User.prototype.setPhoneNumber User.prototype.setPushNotificationSubscriptionType InAppMessageButton InAppMessageButton.prototype.removeAllSubscriptions InAppMessageButton.prototype.removeSubscription InAppMessageButton.prototype.subscribeToClickedEvent FeatureFlag FeatureFlag.prototype.getStringProperty FeatureFlag.prototype.getNumberProperty FeatureFlag.prototype.getBooleanProperty automaticallyShowInAppMessages destroyFeed hideContentCards showContentCards showFeed showInAppMessage deferInAppMessage toggleContentCards toggleFeed changeUser destroy getDeviceId getDeviceId initialize isPushBlocked isPushPermissionGranted isPushSupported logCardClick logCardDismissal logCardImpressions logContentCardImpressions logContentCardClick logCustomEvent logFeedDisplayed logInAppMessageButtonClick logInAppMessageClick logInAppMessageHtmlClick logInAppMessageImpression logPurchase openSession requestPushPermission removeAllSubscriptions removeSubscription requestContentCardsRefresh requestFeedRefresh refreshFeatureFlags requestImmediateDataFlush enableSDK isDisabled setLogger setSdkAuthenticationSignature addSdkMetadata disableSDK subscribeToContentCardsUpdates subscribeToFeedUpdates subscribeToInAppMessage subscribeToSdkAuthenticationFailures toggleLogging unregisterPush wipeData handleBrazeAction subscribeToFeatureFlagsUpdates getAllFeatureFlags logFeatureFlagImpression".split(" "),i=0;i<s.length;i++){for(var m=s[i],k=a.braze,l=m.split("."),j=0;j<l.length-1;j++)k=k[l[j]];k[l[j]]=(new Function("return function "+m.replaceAll(".","_")+"(){window.brazeQueue.push(arguments); return true}"))()}window.braze.getDeferredInAppMessage=function(){return new window.braze.InAppMessage};window.braze.getCachedContentCards=function(){return new window.braze.ContentCards};window.braze.getCachedFeed=function(){return new window.braze.Feed};window.braze.getUser=function(){return new window.braze.User};window.braze.getFeatureFlag=function(){return new window.braze.FeatureFlag};(y=p.createElement(P)).type='text/javascript';
        y.src='https://js.appboycdn.com/web-sdk/5.1/braze.min.js';
        y.async=1;(b=p.getElementsByTagName(P)[0]).parentNode.insertBefore(y,b)
      }(window,document,'script');

      braze.initialize('dc9d7751-8184-4d73-92ba-bc7abcb22008', {
        baseUrl: "sdk.iad-03.braze.com"
      });
      braze.automaticallyShowInAppMessages();
      braze.subscribeToContentCardsUpdates(function(cards){
      });
      braze.openSession();

      const customerPoller = setTimeout(()=>{
        
      }, 2000)

      const emailInputPoller = setTimeout(()=>{
        if (document.querySelector('#contact_form')) {
          document.querySelector('#contact_form').addEventListener("submit",
            function(e) {
              e.preventDefault();

              const email = document.querySelector('[id^="form-newsletter-email-sections--"]').value

              const setUserEmail = window.braze.getUser().setEmail(email);
              if (setUserEmail) {
                const setSubscribed = window.braze.getUser().setEmailNotificationSubscriptionType('subscribed');
                braze.logCustomEvent('email-subscribe', { groupId: 7784 } );
              }

              // TODO: Solve
              // reconcileEmail(email)

              const formStatusSuccess = document.querySelector(".newsletter-form-success");
              if (formStatusSuccess) {
                // after .5 seconds, show the success message
                setTimeout(() => {
                  formStatusSuccess.style.display = 'block';
                }, 500);

                // after 5 seconds, hide the success message and reload the page
                setTimeout(() => {
                  formStatusSuccess.style.display = 'none';
                  location.reload();
                }, 2000);
              }
            }
          );
        }
      }, 2000);`}</Script>
      <Script
        src="https://ui.powerreviews.com/stable/4.1/ui.js"
        strategy="lazyOnload"
      />
      <Script src="https://checkout.overstock.com/cdn/shop/t/69/assets/content-cards.js?v=25858787523254501921720759668" strategy="lazyOnload" />
    </>
  );
}

export default AppScripts;
