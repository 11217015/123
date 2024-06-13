	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#232B30";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#232B30";bookConfig.iconColor="#BEBEBE";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#27181A";bookConfig.formBackgroundColor="#27181A";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="No";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Yes";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Yes";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="False";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.3";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.3";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="20";bookConfig.rightMargin="20";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="400";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#736257";bookConfig.totalPageCount=21;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1350;;bookConfig.securityType="1";bookConfig.CreatedTime ="240613163753";bookConfig.bookTitle="demo";bookConfig.bookmarkCR="64c12bef99dae088e678e09e1ad83d6e89d3e197";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "Chinese(Traditional)",btnFirstPage:"第一頁",btnNextPage:"下一頁",btnLastPage:"最后一頁",btnPrePage:"前一頁",btnDownload:"下載",btnPrint:"打印",btnSearch:"搜索",btnClearSearch:"清除",frmSearchPrompt:"清除",btnBookMark:"目錄",btnHelp:"幫助",btnHome:"主頁",btnFullScreen:"全屏",btnDisableFullScreen:"普屏",btnSoundOn:"打開聲音",btnSoundOff:"關閉聲音",btnShareEmail:"分享",btnSocialShare:"朋友分享",btnZoomIn:"放大",btnZoomOut:"縮小",btnDragToMove:"拖動/移動",btnAutoFlip:"自動翻頁",btnStopAutoFlip:"停止翻頁",btnGoToHome:"返回主頁",frmHelpCaption:"幫助",frmHelpTip1:"可以雙擊進行放大或縮小",frmHelpTip2:"拖動頁面的個角可以進行翻頁",frmPrintCaption:"打印窗口",frmPrintBtnCaption:"打印",frmPrintPrintAll:"打印所有頁面",frmPrintPrintCurrentPage:"打印當前頁",frmPrintPrintRange:"打印范圍：",frmPrintExampleCaption:"例如：2,5,8-26",frmPrintPreparePage:"正在準備頁：",frmPrintPrintFailed:"打印失敗：",pnlSearchInputInvalid:"（最少需要輸入3個字符）",loginCaption:"登錄",loginInvalidPassword:"你輸入的密碼不正確！",loginPasswordLabel:"密碼：",loginBtnLogin:"登錄",loginBtnCancel:"取消",btnThumb:"縮略圖",lblPages:"頁數：",lblPagesFound:"找到頁數：",lblPageIndex:"頁",btnAbout:"關于",frnAboutCaption:"關于我們",btnSinglePage:"單頁",btnDoublePage:"雙頁",btnSwicthLanguage:"切換語言",tipChangeLanguage:"請在下面選擇一種語言",btnMoreOptionsLeft:"更多選擇",btnMoreOptionsRight:"更多選擇",btnFit:"自動適應",smallModeCaption:"點擊全屏",btnAddAnnotation:"加注釋",btnAnnotation:"注釋列表",FlipPageEditor_SaveAndExit:"保存并退出",FlipPageEditor_Exit:"退出",DrawToolWindow_Redo:"重做",DrawToolWindow_Undo:"撤銷",DrawToolWindow_Clear:"清除",DrawToolWindow_Brush:"筆刷",DrawToolWindow_Width:"筆刷寬度",DrawToolWindow_Alpha:"筆刷透明度",DrawToolWindow_Color:"筆刷顔色",DrawToolWindow_Eraser:"擦除",DrawToolWindow_Rectangular:"矩形",DrawToolWindow_Ellipse:"橢圓",TStuff_BorderWidth:"邊框寬帶",TStuff_BorderAlph:"邊框透明度",TStuff_BorderColor:"字體顔色",DrawToolWindow_TextNote:"文本附注",AnnotMark:"書簽",lastpagebtnHelp:"最后一頁",firstpagebtnHelp:"第一頁",homebtnHelp:"返回首頁",aboubtnHelp:"關于",screenbtnHelp:"在一個完整的窗口中打開該應用程序",helpbtnHelp:"打開幫助窗口",searchbtnHelp:"從書頁中搜索",pagesbtnHelp:"預覽小冊子的縮略圖",bookmarkbtnHelp:"打開目錄",AnnotmarkbtnHelp:"打開書簽",printbtnHelp:"打印小冊子",soundbtnHelp:"開啟或關閉的聲音",sharebtnHelp:"發送消息",socialSharebtnHelp:"發送消息",zoominbtnHelp:"放大",downloadbtnHelp:"下載宣傳冊",pagemodlebtnHelp:"單頁和雙頁",languagebtnHelp:"切換語言",annotationbtnHelp:"添加批注",addbookmarkbtnHelp:"自定義書簽",removebookmarkbtnHelp:"移除書簽",updatebookmarkbtnHelp:"更新書簽",btnShoppingCart:"購物車按鈕",Help_ShoppingCartbtn:"購物車",Help_btnNextPage:"下頁",Help_btnPrePage:"上頁",Help_btnAutoFlip:"自動翻頁",Help_StopAutoFlip:"停止自動翻頁",btnaddbookmark:"添加",btndeletebookmark:"刪除",btnupdatebookmark:"更新",frmyourbookmarks:"你的書簽",frmitems:"項目",DownloadFullPublication:"整份出版物",DownloadCurrentPage:"當前頁",DownloadAttachedFiles:"附件",lblLink:"分享鏈接",btnCopy:"復制按鈕",infCopyToClipboard:"瀏覽器不支持剪切板功能",restorePage:"是否從上次的位置開始",tmpl_Backgoundsoundon:"背景音樂開",tmpl_Backgoundsoundoff:"背景音樂關",tmpl_Flipsoundon:"翻頁聲開",tmpl_Flipsoundoff:"翻頁聲關",Help_PageIndex:"當前頁碼",tmpl_PrintPageRanges:"頁范圍",tmpl_PrintPreview:"預覽",btnSelection:"選擇文字",loginNameLabel:"您的名字:",btnGotoPage:"跳至",btnSettings:"設置",soundSettingTitle:"聲音選項",closeFlipSound:"翻頁聲開關",closeBackgroundSound:"背景聲開關",frmShareCaption:"分享",frmShareLinkLabel:"鏈接:",frmShareBtnCopy:"復制",frmShareItemsGroupCaption:"朋友分享",TAnnoActionPropertyStuff_GotoPage:"轉到頁",btnPageBack:"后退",btnPageForward:"前進",SelectTextCopy:"文本復制",selectCopyButton:"復制",TStuffCart_TypeCart:"購物車",TStuffCart_DetailedQuantity:"數量",TStuffCart_DetailedPrice:"價格",ShappingCart_Close:"關閉",ShappingCart_CheckOut:"付款",ShappingCart_Item:"項目",ShappingCart_Total:"總計",ShappingCart_AddCart:"添加到購物車",ShappingCart_InStock:"有貨",TStuffCart_DetailedCost:"運費",TStuffCart_DetailedTime:"交貨時間",TStuffCart_DetailedDay:"天數(s)",ShappingCart_NotStock:"無貨",btnCrop:"截圖",btnDragButton:"拖動",btnFlipBook:"翻頁書",btnSlideMode:"水平滑動翻頁",btnSinglePageMode:"單頁模式",btnVertical:"上下翻頁瀏覽",btnHotizontal:"左右翻頁瀏覽",btnClose:"關閉",btnDoublePage:"雙頁",btnBookStatus:"視圖",checkBoxInsert:"加入當前網頁",lblLast:"這是最後一頁。",lblFirst:"這是第一頁。",lblFullscreen:"點擊查看全屏",lblName:"名稱",lblPassword:"密碼",lblLogin:"登入",lblCancel:"取消",lblNoName:"用戶名稱不能為空。",lblNoPassword:"密碼不能為空。",lblNoCorrectLogin:"請輸入正確的用戶名和密碼。",btnVideo:"視頻畫廊",btnSlideShow:"幻燈片放映",pnlSearchInputInvalid:"（最少需要輸入3個字符）",btnDragToMove:"拖動/移動",btnPositionToMove:"滑鼠移動",lblHelp1:"拖動頁面角查看",lblHelp2:"按兩下放大，縮小",lblCopy:"複製",lblAddToPage:"添加到頁面",lblPage:"頁",lblTitle:"標題",lblEdit:"編輯",lblDelete:"删除",lblRemoveAll:"删除所有",tltCursor:"光標",tltAddHighlight:"添加高亮",tltAddTexts:"添加文字",tltAddShapes:"添加形狀",tltAddNotes:"添加注釋",tltAddImageFile:"添加影像檔案",tltAddSignature:"添加簽名",tltAddLine:"添加直線",tltAddArrow:"添加箭頭",tltAddRect:"添加矩形",tltAddEllipse:"添加橢圓",lblDoubleClickToZoomIn:"雙擊進行放大。",frmShareCaption:"分享",frmShareLabel:"分享",frmShareInfo:"您可以輕鬆地分享本出版物中對社交網絡。只需點擊下面的相應按鈕。",frminsertLabel:"插入到網站",frminsertInfo:"使用下面的代碼本出版物中嵌入到你的網站。",btnQRCode:"掃描二維碼",btnRotateLeft:"左轉",btnRotateRight:"右轉",lblSelectMode:"請選擇顯示方式",frmDownloadPreview:"預覽",frmHowToUse:"使用說明",lblHelpPage1:"頁角以及中間可手動翻頁",lblHelpPage2:"雙擊或者用拉大手勢可以放大",lblHelpPage3:"點擊logo 查看更多信息",lblHelpPage4:"點擊工具欄按鈕進行搜索,分享等",lblHelpPage5:"切換橫屏豎屏",TTActionQuiz_PlayAgain:"重來一次",TTActionQuiz_Ration:"你的評分是",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",frmBookMark:"書籤",btnFullscreen:"全屏",btnExitFullscreen:"退出全屏",btnMore:"更多",frmPrintall:"打印所有頁面",frmPrintcurrent:"打印當前頁面",frmPrintRange:"打印頁面範圍",frmPrintexample:"示例: 2,3,5-10",frmPrintbtn:"打印",frmaboutcaption:"聯繫",frmaboutcontactinformation:"聯繫信息",frmaboutADDRESS:"地址",frmaboutEMAIL:"電子郵件",frmaboutWEBSITE:"網站",frmaboutMOBILE:"手機",frmaboutAUTHOR:"作者",frmaboutDESCRIPTION:"描述",frmSearch:"蒐索",frmToc:"目錄",btnTableOfContent:"目錄",lblDescription:"標題",frmLinkLabel:"鏈接",infNotSupportHtml5:"您的瀏覽器不支持HTML5。",frmQrcodeCaption:"用手機掃描底部的二維碼。"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product\(s\)\:<br/>    $\{shopping\}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168422305","alpha":"1","location":{"tannoName":"sound1","x":"0.030555555555555555","y":"0.09074074074074075","width":"0.12222222222222222","height":"0.0748148148148148","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"EVT_PageViewed","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/3.動畫的配樂.MP3"}}}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168424910","alpha":"1","location":{"tannoName":"sound3","x":"0.25555555555555554","y":"0.2777777777777778","width":"0.11493055555555555","height":"0.07037037037037037","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":[{"url":""},{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-24-16.mp3"}]}}],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168424771","alpha":"1","location":{"tannoName":"sound4","x":"0.21805555555555556","y":"0.0962962962962963","width":"0.111875","height":"0.06851851851851852","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-26-16.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168428512","alpha":"1","location":{"tannoName":"sound5","x":"0.3416666666666667","y":"0.07962962962962963","width":"0.13","height":"0.07962962962962963","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-26-58.mp3"}}}}],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168425211","alpha":"1","location":{"tannoName":"sound6","x":"0.7569444444444444","y":"0.12962962962962962","width":"0.1625","height":"0.09953703703703703","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-29-45.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"20241316842984","alpha":"1","location":{"tannoName":"sound7","x":"0.6430555555555556","y":"0.005555555555555556","width":"0.13909722222222223","height":"0.08518518518518518","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-30-26.mp3"}}}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168429935","alpha":"1","location":{"tannoName":"sound8","x":"0.5902777777777778","y":"0.037037037037037035","width":"0.2086111111111111","height":"0.12777777777777777","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-31-3.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168429829","alpha":"1","location":{"tannoName":"sound9","x":"0.5486111111111112","y":"-0.003703703703703704","width":"0.25701388888888893","height":"0.1574074074074074","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-31-46.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168421446","alpha":"1","location":{"tannoName":"sound10","x":"0.6013888888888889","y":"-0.012962962962962963","width":"0.125","height":"0.07657407407407407","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-32-32.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202413168422476","alpha":"1","location":{"tannoName":"sound11","x":"0.4583333333333333","y":"-0.09814814814814815","width":"0.09166666666666666","height":"0.05611111111111111","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"720","pageHeight":"540"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"SimpleAudioPlayer","className":"SimpleAudioPlayer","H5Replay":"false","H5PlaybackNumber":"0","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/ttsmaker-file-2024-6-13-16-33-3.mp3"}}}}],[],[]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}