(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "viewerArea": "this.MainViewer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -37.7,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_14BD52F0_0795_D96B_4186_DB880A593682",
 "image": {
  "levels": [
   {
    "url": "media/popup_14BD52F0_0795_D96B_4186_DB880A593682_0_1.png",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.69,
 "hideEasing": "cubic_out",
 "hfov": 1.8
},
{
 "items": [
  {
   "media": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0",
   "camera": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2",
   "camera": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF",
   "camera": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.album_1600C4DB_076E_D95D_418F_0918736510B0",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_15EE2F85_0797_27B5_4181_E5F0A92F0F70",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "100_0205_20260622212210",
 "hfovMin": "135%",
 "id": "panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_14ED28C8_02BB_35CA_416B_ADE0884E8538",
  "this.overlay_1406EBFD_02B9_CBC4_417A_1EFD6A226311",
  "this.overlay_147E9FA9_02B7_4C42_417B_8916557E739A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -101.92,
   "yaw": 136.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0"
  }
 ],
 "hfov": 360,
 "pitch": -28.34,
 "vfov": 123.32,
 "thumbnailUrl": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -128.47,
  "class": "PanoramaCameraPosition",
  "pitch": 2.72
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_14BD52F0_0795_D96B_4186_DB880A593682_0_0.png",
   "width": 1122,
   "class": "ImageResourceLevel",
   "height": 1402
  },
  {
   "url": "media/popup_14BD52F0_0795_D96B_4186_DB880A593682_0_1.png",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_14BD52F0_0795_D96B_4186_DB880A593682_0_2.png",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_12D9D02F_0795_78F5_4197_0EC561F82D6F",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_15EE2F85_0797_27B5_4181_E5F0A92F0F70",
   "start": "this.viewer_uid14018857_07EF_2955_4191_782276836A2FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_1521C90A_0793_68BF_4111_3B85AD5542F0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_1521C90A_0793_68BF_4111_3B85AD5542F0, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid14018857_07EF_2955_4191_782276836A2FVideoPlayer)",
   "player": "this.viewer_uid14018857_07EF_2955_4191_782276836A2FVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_1521C90A_0793_68BF_4111_3B85AD5542F0",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_25F4A75F_058A_DA6B_4167_145C7840B7C3_t.jpg",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1280,
 "label": "villitas video render",
 "loop": false,
 "id": "video_25F4A75F_058A_DA6B_4167_145C7840B7C3",
 "height": 720,
 "video": {
  "width": 1280,
  "mp4Url": "media/video_25F4A75F_058A_DA6B_4167_145C7840B7C3.mp4",
  "class": "VideoResource",
  "height": 720
 }
},
{
 "thumbnailUrl": "media/video_15EE2F85_0797_27B5_4181_E5F0A92F0F70_t.jpg",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1280,
 "label": "casa club",
 "loop": false,
 "id": "video_15EE2F85_0797_27B5_4181_E5F0A92F0F70",
 "height": 720,
 "video": {
  "width": 1280,
  "mp4Url": "media/video_15EE2F85_0797_27B5_4181_E5F0A92F0F70.mp4",
  "class": "VideoResource",
  "height": 720
 }
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Window129349"
 },
 "id": "window_21DB28FB_029B_77B5_4192_CFC6DD1FCEB6",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "headerBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "height": 600,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderColor": "#000000",
 "children": [
  "this.htmlText_21DB08FD_029B_77AD_40E8_561D2FD7B8C0",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "borderRadius": 0,
   "insetBorder": false,
   "url": "https://drive.google.com/file/d/1oGQGelp_l7UHvs6a2khFf8TexGxZAuy5/view?usp=sharing",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "class": "WebFrame",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "paddingLeft": 0,
   "data": {
    "name": "WebFrame129868"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingRight": 5,
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "headerPaddingBottom": 10,
 "layout": "vertical",
 "titlePaddingBottom": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "footerBackgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "closeButtonIconColor": "#000000",
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "hfov": 120,
  "yaw": 78.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 9.31,
    "path": "shortest",
    "targetPitch": -58.01,
    "pitchSpeed": 6.68,
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 13.9
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_147918B9_07EF_29DA_417A_119DF2CD5C54",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playList": "this.album_1600C4DB_076E_D95D_418F_0918736510B0_AlbumPlayList",
 "thumbnailUrl": "media/album_1600C4DB_076E_D95D_418F_0918736510B0_t.png",
 "id": "album_1600C4DB_076E_D95D_418F_0918736510B0",
 "class": "PhotoAlbum",
 "label": "Album de Fotos ChatGPT Image Jun 27, 2026, 07_12_17 AM"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "hfov": 120,
  "yaw": 9.31,
  "class": "PanoramaCameraPosition",
  "pitch": -58.01
 },
 "id": "panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -43.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -141.87,
    "path": "shortest",
    "targetPitch": -30.69,
    "pitchSpeed": 73.99,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": -139.6,
    "path": "shortest",
    "targetPitch": -42.5,
    "pitchSpeed": 11.95,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_144348FB_07EF_295E_4165_BF5FD62A1E51",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_19E49EFF_058A_CA26_4190_09759880E9E7"
 ],
 "thumbnailUrl": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF",
 "class": "Panorama",
 "label": "ENTRADA VILLITAS",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_14F6E0E9_0797_F97D_419D_EED057A7BEA6",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBorderSize": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBorderSize": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonPressedIconLineWidth": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.viewer_uid14018857_07EF_2955_4191_782276836A2F"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingRight": 5,
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonBackgroundOpacity": 0.3,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingBottom": 0,
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window10149"
 },
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0",
   "camera": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2",
   "camera": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF",
   "camera": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.album_1600C4DB_076E_D95D_418F_0918736510B0",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_15EE2F85_0797_27B5_4181_E5F0A92F0F70",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "villitas 2 vista ACTUALIZACION DISPONIBLES ROJO",
 "hfovMin": "120%",
 "id": "panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0C7075D6_0279_7C45_417A_73738956098A",
  "this.overlay_16606494_028A_FCC4_4160_838E6110B448",
  "this.overlay_164F69C4_028F_3444_417D_42473BF7323A",
  "this.overlay_14D0B0E4_029B_7427_4182_715178DB6496",
  "this.overlay_1493C162_0296_D429_4179_693D1D64A171",
  "this.overlay_2618DB03_0597_4BF8_4192_E7286F68BF03",
  "this.overlay_27B21191_058B_561F_4177_D7FCC2AC12A7",
  "this.overlay_277C7674_0589_DA07_4192_0C8916DF964D",
  "this.overlay_27B1568B_058F_FA07_4160_428C7E20A932",
  "this.overlay_19EE772C_0589_5A1C_4185_F33CD2EE77FE",
  "this.overlay_26BBBF7D_058B_4AFE_4191_A79413BD819A",
  "this.overlay_263D0A3E_0589_CA78_4190_52A96D3A4891",
  "this.overlay_19D592A0_05F7_5A08_418D_FC9388E25D06",
  "this.overlay_26A47458_05F9_3E3A_4196_27FAA071DC53",
  "this.overlay_26A709AB_05FB_761C_4197_8BDD7CFC948D",
  "this.overlay_19C16AE9_05F9_4A1E_4163_9B12F6919DD5",
  "this.overlay_271B11A3_05FE_D611_4192_8AA311EB010C",
  "this.overlay_27F9727B_05FA_DAF7_4193_341724622E89",
  "this.overlay_263EE11A_05FA_D637_4183_E7E3EEF1D4C0",
  "this.overlay_19F50EB6_05F9_4A7C_4195_90406AE021BE",
  "this.overlay_262AE36E_0589_5AE9_4189_4653CB232528",
  "this.overlay_26077D7F_058F_4EE6_4191_395A36A96956",
  "this.overlay_26A8CDB9_0589_4E6C_418D_C9ED31A56585",
  "this.overlay_26B2DB81_058B_4A1F_4181_736F641FCF24",
  "this.overlay_26B9BB1A_058A_CA23_417B_0E00508669BC",
  "this.overlay_26264FB7_0589_CA61_4188_101EB9F8418D",
  "this.overlay_19A2946D_0596_DEE1_416C_52EF2F66AB1F",
  "this.overlay_2741D491_0597_FE20_4193_EBC56EF2B069",
  "this.overlay_23776595_029A_DE7D_4199_D3CE2DDF6F64",
  "this.overlay_15E8E7CE_0775_27B7_4191_118C65309AF0",
  "this.overlay_1435D034_0775_38EA_4183_80668DCC4516",
  "this.popup_14BD52F0_0795_D96B_4186_DB880A593682",
  "this.overlay_15CBE60A_0797_78BF_4187_C84360DACF57",
  "this.overlay_152FE2DD_07BD_3955_418D_EEC3D4165C90",
  "this.popup_1560878B_0797_E7BD_4187_37160B74F1D2",
  "this.overlay_14DD9A21_0796_E8ED_4181_1861464ED6FE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF"
  },
  {
   "backwardYaw": 136.21,
   "yaw": -101.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2"
  }
 ],
 "hfov": 360,
 "pitch": -7.33,
 "vfov": 159.53,
 "thumbnailUrl": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_t.jpg",
 "hfovMax": 130
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Window116268"
 },
 "id": "window_226408E2_058A_F7FF_416F_173CD69F4EBE",
 "backgroundOpacity": 1,
 "width": 600,
 "closeButtonIconHeight": 12,
 "headerBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "height": 600,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "shadowBlurRadius": 6,
 "shadow": true,
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderColor": "#000000",
 "children": [
  "this.htmlText_226658E7_058A_F7C5_4198_C437D5CC03D5",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "borderRadius": 0,
   "insetBorder": false,
   "url": "https://drive.google.com/file/d/1cBfkWW3EyxsqW6wjksiPEuaoH6uvh-JM/preview",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "class": "WebFrame",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "paddingLeft": 0,
   "data": {
    "name": "WebFrame132410"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingRight": 5,
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBorderRadius": 11,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerPaddingLeft": 10,
 "headerPaddingBottom": 10,
 "layout": "vertical",
 "titlePaddingBottom": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "headerVerticalAlign": "middle",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "footerBackgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "closeButtonIconColor": "#000000",
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -141.87,
  "class": "PanoramaCameraPosition",
  "pitch": -30.69
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -139.6,
    "path": "shortest",
    "targetPitch": -42.5,
    "pitchSpeed": 11.95,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -65.65,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "loop": false,
 "id": "popup_1560878B_0797_E7BD_4187_37160B74F1D2",
 "pitch": -42.58,
 "hideEasing": "cubic_out",
 "hfov": 5.05,
 "video": {
  "width": 1280,
  "mp4Url": "media/video_15EE2F85_0797_27B5_4181_E5F0A92F0F70.mp4",
  "class": "VideoResource",
  "height": 720
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_1600C4DB_076E_D95D_418F_0918736510B0_0_t.png",
 "id": "album_1600C4DB_076E_D95D_418F_0918736510B0_0",
 "class": "Photo",
 "width": 1122,
 "image": {
  "levels": [
   {
    "url": "media/album_1600C4DB_076E_D95D_418F_0918736510B0_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "ChatGPT Image Jun 27, 2026, 07_12_17 AM",
 "height": 1402
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "items": [
  {
   "media": "this.video_25F4A75F_058A_DA6B_4167_145C7840B7C3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_141F685B_07EF_295D_4193_AB94741F6D33, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_141F685B_07EF_295D_4193_AB94741F6D33, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_141F685B_07EF_295D_4193_AB94741F6D33",
 "class": "PlayList"
},
{
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.15,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "data": {
  "name": "UIComponent10624"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage10625"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "paddingLeft": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton10626"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.21,
   "hfov": 9.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.36
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0, this.camera_147918B9_07EF_29DA_417A_119DF2CD5C54); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_20048F88_0589_CA30_418B_6169CED2AFA4",
   "pitch": -9.36,
   "yaw": 136.21,
   "hfov": 9.16,
   "distance": 100
  }
 ],
 "id": "overlay_14ED28C8_02BB_35CA_416B_ADE0884E8538",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 137.02,
   "hfov": 20.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.3
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_1_0.png",
      "width": 504,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.3,
   "yaw": 137.02,
   "hfov": 20.16,
   "distance": 50
  }
 ],
 "id": "overlay_1406EBFD_02B9_CBC4_417A_1EFD6A226311",
 "data": {
  "label": "VILLITAS DIAMANTE"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_2_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -145.27,
   "hfov": 58.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.76
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_2_0.png",
      "width": 1460,
      "class": "ImageResourceLevel",
      "height": 237
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.76,
   "yaw": -145.27,
   "hfov": 58.53,
   "distance": 50
  }
 ],
 "id": "overlay_147E9FA9_02B7_4C42_417B_8916557E739A",
 "data": {
  "label": "VILLITAS RESIDENCIAL"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "viewerArea": "this.viewer_uid14018857_07EF_2955_4191_782276836A2F",
 "id": "viewer_uid14018857_07EF_2955_4191_782276836A2FVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_21DB08FD_029B_77AD_40E8_561D2FD7B8C0",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText129350"
 },
 "shadow": false
},
{
 "items": [
  {
   "media": "this.album_1600C4DB_076E_D95D_418F_0918736510B0_0",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.29",
     "class": "PhotoCameraPosition",
     "y": "0.68",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_1600C4DB_076E_D95D_418F_0918736510B0_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "blending": 0,
 "id": "overlay_19E49EFF_058A_CA26_4190_09759880E9E7",
 "class": "VideoPanoramaOverlay",
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_19E49EFF_058A_CA26_4190_09759880E9E7_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 23.82,
 "useHandCursor": true,
 "roll": -1.02,
 "click": "this.overlay_19E49EFF_058A_CA26_4190_09759880E9E7.play()",
 "hfov": 38.42,
 "autoplay": false,
 "yaw": -101.51,
 "vfov": 29.26,
 "rotationY": 4.69,
 "rotationX": -26.25,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1280,
  "mp4Url": "media/video_25F4A75F_058A_DA6B_4167_145C7840B7C3.mp4",
  "class": "VideoResource",
  "height": 720
 }
},
{
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "viewer_uid14018857_07EF_2955_4191_782276836A2F",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea10623"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "bleachingDistance": 0.4,
 "yaw": -22.93,
 "pitch": 13.43,
 "bleaching": 0.43,
 "id": "overlay_0C7075D6_0279_7C45_417A_73738956098A",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -61.81,
   "hfov": 5.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.63
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_152C88D6_0793_6957_418C_B46D6BD20582",
   "pitch": -40.63,
   "yaw": -61.81,
   "hfov": 5.14,
   "distance": 100
  }
 ],
 "id": "overlay_16606494_028A_FCC4_4160_838E6110B448",
 "data": {
  "label": "Caseta"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_1_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -101.33,
   "hfov": 22.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.41
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_1_0.png",
      "width": 558,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.41,
   "yaw": -101.33,
   "hfov": 22.5,
   "distance": 50
  }
 ],
 "id": "overlay_164F69C4_028F_3444_417D_42473BF7323A",
 "data": {
  "label": "VILLITAS RESIDENCIAL"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_1_HS_4_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -80.44,
   "hfov": 25.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_1_HS_4_0.png",
      "width": 642,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.48,
   "yaw": -80.44,
   "hfov": 25.92,
   "distance": 50
  }
 ],
 "id": "overlay_14D0B0E4_029B_7427_4182_715178DB6496",
 "data": {
  "label": "SANTA ANA DEL CONDE"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_1_HS_5_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 66.61,
   "hfov": 42.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_1_HS_5_0.png",
      "width": 1053,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.98,
   "yaw": 66.61,
   "hfov": 42.51,
   "distance": 50
  }
 ],
 "id": "overlay_1493C162_0296_D429_4179_693D1D64A171",
 "data": {
  "label": "PUERTO INTERIOR"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_6_1_0_map.gif",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -41.15,
   "hfov": 10.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.82
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -41.15,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_6_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.82,
   "hfov": 10.7
  }
 ],
 "id": "overlay_2618DB03_0597_4BF8_4192_E7286F68BF03",
 "data": {
  "label": "DISPONIBLES -DIV-406"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_7_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -30.79,
   "hfov": 8.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.37
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -30.79,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_7_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.37,
   "hfov": 8.72
  }
 ],
 "id": "overlay_27B21191_058B_561F_4177_D7FCC2AC12A7",
 "data": {
  "label": "DISPONIBLES DIV-406"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_8_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -49.38,
   "hfov": 10.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -59.07
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -49.38,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_8_0.png",
      "width": 250,
      "class": "ImageResourceLevel",
      "height": 227
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -59.07,
   "hfov": 10.08
  }
 ],
 "id": "overlay_277C7674_0589_DA07_4192_0C8916DF964D",
 "data": {
  "label": "DISPONIBLES DIV-405"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_9_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.37,
   "hfov": 19.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -50.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -31.37,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_9_0.png",
      "width": 487,
      "class": "ImageResourceLevel",
      "height": 327
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.48,
   "hfov": 19.49
  }
 ],
 "id": "overlay_27B1568B_058F_FA07_4160_428C7E20A932",
 "data": {
  "label": "DISPONIBLES DIV.405"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_10_1_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -15.14,
   "hfov": 5.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -15.14,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_10_0.png",
      "width": 127,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.64,
   "hfov": 5.14
  }
 ],
 "id": "overlay_19EE772C_0589_5A1C_4185_F33CD2EE77FE",
 "data": {
  "label": "DISPONIBLES  DIV-405"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_11_1_0_map.gif",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -24.52,
   "hfov": 10.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -69.46
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -24.52,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_11_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 228
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -69.46,
   "hfov": 10.41
  }
 ],
 "id": "overlay_26BBBF7D_058B_4AFE_4191_A79413BD819A",
 "data": {
  "label": "DISPONIBLES DIV-404"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_12_1_0_map.gif",
      "width": 193,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -9.69,
   "hfov": 15.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -54.77
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_263D0A3E_0589_CA78_4190_52A96D3A4891",
 "data": {
  "label": "DISPONIBLES DIV-404"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_13_1_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.04,
   "hfov": 6.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -7.04,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_13_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45,
   "hfov": 6.91
  }
 ],
 "id": "overlay_19D592A0_05F7_5A08_418D_FC9388E25D06",
 "data": {
  "label": "DISPONIBLES DIV-404"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_14_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.67,
   "hfov": 4.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.93
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 4.67,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_14_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.93,
   "hfov": 4.53
  }
 ],
 "id": "overlay_26A47458_05F9_3E3A_4196_27FAA071DC53",
 "data": {
  "label": "DISPONIBLES DIV -404"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_15_1_0_map.gif",
      "width": 159,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 28.39,
   "hfov": 12.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -71.25
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 28.39,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_15_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 269
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -71.25,
   "hfov": 12.86
  }
 ],
 "id": "overlay_26A709AB_05FB_761C_4197_8BDD7CFC948D",
 "data": {
  "label": "DISPONIBLES DIV-403"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_16_1_0_map.gif",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 15.92,
   "hfov": 13.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -58.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 15.92,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_16_0.png",
      "width": 331,
      "class": "ImageResourceLevel",
      "height": 469
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -58.43,
   "hfov": 13.32
  }
 ],
 "id": "overlay_19C16AE9_05F9_4A1E_4163_9B12F6919DD5",
 "data": {
  "label": "DISPONIBLES DIV-403"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_17_1_0_map.gif",
      "width": 172,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 17.07,
   "hfov": 13.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.25
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 17.07,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_17_0.png",
      "width": 345,
      "class": "ImageResourceLevel",
      "height": 161
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.25,
   "hfov": 13.87
  }
 ],
 "id": "overlay_271B11A3_05FE_D611_4192_8AA311EB010C",
 "data": {
  "label": "DISPONIBLES DIV-403"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_18_1_0_map.gif",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 60.62,
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -63.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 60.62,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_18_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -63.04,
   "hfov": 9.37
  }
 ],
 "id": "overlay_27F9727B_05FA_DAF7_4193_341724622E89",
 "data": {
  "label": "DISPONIBLES DIV-402"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_19_1_0_map.gif",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 39.14,
   "hfov": 17.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -53.76
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 39.14,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_19_0.png",
      "width": 437,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -53.76,
   "hfov": 17.5
  }
 ],
 "id": "overlay_263EE11A_05FA_D637_4183_E7E3EEF1D4C0",
 "data": {
  "label": "DISPONIBLES DIV-402"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_20_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 30.58,
   "hfov": 8.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.54
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 30.58,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_20_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 143
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.54,
   "hfov": 8.73
  }
 ],
 "id": "overlay_19F50EB6_05F9_4A7C_4195_90406AE021BE",
 "data": {
  "label": "DISPONIBLES DIV-402"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_21_1_0_map.gif",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 75.23,
   "hfov": 8.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -51.67
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 75.23,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_21_0.png",
      "width": 210,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.67,
   "hfov": 8.5
  }
 ],
 "id": "overlay_262AE36E_0589_5AE9_4189_4653CB232528",
 "data": {
  "label": "DISPONIBLES DIV-401"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_22_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 181
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 55.05,
   "hfov": 18.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 55.05,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_22_0.png",
      "width": 460,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.33,
   "hfov": 18.41
  }
 ],
 "id": "overlay_26077D7F_058F_4EE6_4191_395A36A96956",
 "data": {
  "label": "DISPONIBLES DIV-401"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_23_1_0_map.gif",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 45.63,
   "hfov": 10.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.1
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 45.63,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_23_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.1,
   "hfov": 10.69
  }
 ],
 "id": "overlay_26A8CDB9_0589_4E6C_418D_C9ED31A56585",
 "data": {
  "label": "DISPONIBLES DIV-401"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_24_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 80.73,
   "hfov": 8.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.24
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 80.73,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_24_0.png",
      "width": 205,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.24,
   "hfov": 8.29
  }
 ],
 "id": "overlay_26B2DB81_058B_4A1F_4181_736F641FCF24",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_25_1_0_map.gif",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 63.21,
   "hfov": 13.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 63.21,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_25_0.png",
      "width": 332,
      "class": "ImageResourceLevel",
      "height": 209
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.04,
   "hfov": 13.35
  }
 ],
 "id": "overlay_26B9BB1A_058A_CA23_417B_0E00508669BC",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_26_1_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 52.95,
   "hfov": 5.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 52.95,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_26_0.png",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.04,
   "hfov": 5.54
  }
 ],
 "id": "overlay_26264FB7_0589_CA61_4188_101EB9F8418D",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_27_1_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 48
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.46,
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 69.46,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_27_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.4,
   "hfov": 4.96
  }
 ],
 "id": "overlay_19A2946D_0596_DEE1_416C_52EF2F66AB1F",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_28_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 43
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 65.54,
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.16
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 65.54,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_28_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.16,
   "hfov": 5.05
  }
 ],
 "id": "overlay_2741D491_0597_FE20_4193_EBC56EF2B069",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_29_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.06,
   "hfov": 7.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.3
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_29_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.3,
   "yaw": -62.06,
   "hfov": 7.53,
   "distance": 50
  }
 ],
 "id": "overlay_23776595_029A_DE7D_4199_D3CE2DDF6F64",
 "data": {
  "label": "ACCESO"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_30_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -35.63,
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_30_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.31,
   "yaw": -35.63,
   "hfov": 11.17,
   "distance": 50
  }
 ],
 "id": "overlay_15E8E7CE_0775_27B7_4191_118C65309AF0",
 "data": {
  "label": "\u000dLE\u00d3N\u000d"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_31_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -37.7,
   "hfov": 3.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.69
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_14BD52F0_0795_D96B_4186_DB880A593682, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_12D9D02F_0795_78F5_4197_0EC561F82D6F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_12BD7FF6_0795_6757_419A_6CFF15A3689E",
   "pitch": -0.69,
   "yaw": -37.7,
   "hfov": 3.17,
   "distance": 100
  }
 ],
 "id": "overlay_1435D034_0775_38EA_4183_80668DCC4516",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_32_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -101.92,
   "hfov": 5.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.49
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2, this.camera_144348FB_07EF_295E_4165_BF5FD62A1E51); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_117867D6_07AD_2757_4197_EDF509BB2138",
   "pitch": -7.49,
   "yaw": -101.92,
   "hfov": 5.06,
   "distance": 100
  }
 ],
 "id": "overlay_15CBE60A_0797_78BF_4187_C84360DACF57",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_33_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -65.65,
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.58
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1560878B_0797_E7BD_4187_37160B74F1D2, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_14F6E0E9_0797_F97D_419D_EED057A7BEA6, this.video_15EE2F85_0797_27B5_4181_E5F0A92F0F70, this.PlayList_1521C90A_0793_68BF_4111_3B85AD5542F0, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1529B8DB_0793_695D_4173_6E4D83E027E7",
   "pitch": -42.58,
   "yaw": -65.65,
   "hfov": 5.05,
   "distance": 100
  }
 ],
 "id": "overlay_152FE2DD_07BD_3955_418D_EEC3D4165C90",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_34_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -64.98,
   "hfov": 5.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.65
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_34_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.65,
   "yaw": -64.98,
   "hfov": 5.99,
   "distance": 50
  }
 ],
 "id": "overlay_14DD9A21_0796_E8ED_4181_1861464ED6FE",
 "data": {
  "label": "SALON "
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_226658E7_058A_F7C5_4198_C437D5CC03D5",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "10%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText116269"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "right": 0,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_20048F88_0589_CA30_418B_6169CED2AFA4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_152C88D6_0793_6957_418C_B46D6BD20582",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_31_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_12BD7FF6_0795_6757_419A_6CFF15A3689E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_32_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_117867D6_07AD_2757_4197_EDF509BB2138",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_33_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_1529B8DB_0793_695D_4173_6E4D83E027E7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "90%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "width": 50,
 "right": 9,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 50,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 70,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailGrid",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "paddingLeft": 70,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemLabelFontColor": "#04A3E1"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "class": "WebFrame",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "paddingLeft": 0,
 "data": {
  "name": "WebFrame"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "MapViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.975%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.15,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 60,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.53,
 "height": "100%",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "children": [
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.HTMLText_1E50287E_07B6_F55C_4191_9597622D8751",
  "this.Container_231B20A5_0289_D656_419A_4BBA41FF1DE4"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.84,
 "overflow": "scroll",
 "shadowOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.31
 ],
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 40,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "paddingLeft": 40,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "- Buttons set"
 },
 "shadowBlurRadius": 92,
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 3
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": 40,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.15,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "5%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": 40,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-2"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-3"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-4"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-5"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-6"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_1E50287E_07B6_F55C_4191_9597622D8751",
 "backgroundOpacity": 0,
 "width": "99.078%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.03%",
 "paddingRight": 20,
 "height": "17.117%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 20,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:40px;font-family:'Arial CYR';\">VILLITAS</SPAN><SPAN STYLE=\"color:#ffffff;font-size:33px;font-family:'Arial CYR';\"> </SPAN><SPAN STYLE=\"color:#ffffff;font-size:18px;font-family:'Arial CE';\">DIAMANTE</SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_231B20A5_0289_D656_419A_4BBA41FF1DE4",
 "left": "0%",
 "children": [
  "this.Button_1EDFB48A_07B7_3DA5_415B_17F5526F307F",
  "this.Button_18EA5A81_0697_55A7_4179_87A358ACF131",
  "this.Button_1BCDBDCF_0699_4FB9_418A_2DB2E6D09A91",
  "this.Button_24E3A9AC_0599_7647_4194_39E5C68136E8",
  "this.Button_1BF8723D_069B_54D1_416A_5968B3BA0916"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "17.01%",
 "paddingRight": 0,
 "height": "55.135%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "BOTONES MENU"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.23vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 50,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": "2.39vh",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "paddingLeft": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "46%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.23vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "75%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 5,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Main Entrance",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lobby",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Reception",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Reception",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Meeting Area 1",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Meeting Area 2",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Bar",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Chill Out",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Terrace",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "Garden",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 9"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 5,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 9"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 5,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 9"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 5,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 9"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 5,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 9"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 30,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 5,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button <BACK"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 30,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button text 9"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial CE",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1EDFB48A_07B7_3DA5_415B_17F5526F307F",
 "backgroundOpacity": 0,
 "pressedFontColor": "#FFFFFF",
 "width": 181,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [],
 "right": "7.37%",
 "shadowOpacity": 0,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  0.82
 ],
 "shadowVerticalLength": 0,
 "propagateClick": true,
 "click": "this.showWindow(this.window_21DB28FB_029B_77B5_4192_CFC6DD1FCEB6, null, false)",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "27.78%",
 "iconBeforeLabel": true,
 "height": 41,
 "rollOverFontColor": "#FF9933",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "20px",
 "borderSize": 0,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [],
 "paddingLeft": 0,
 "label": "FINANCIAMIENTO",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "shadow": true,
 "iconWidth": 0,
 "shadowBlurRadius": 63,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "shadowHorizontalLength": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Arial CE",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "pressedLabel": "BROCHURE",
 "id": "Button_18EA5A81_0697_55A7_4179_87A358ACF131",
 "left": "19.82%",
 "width": 130,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.showWindow(this.window_226408E2_058A_F7FF_416F_173CD69F4EBE, null, false)",
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "42.81%",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "20px",
 "class": "Button",
 "pressedBackgroundOpacity": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "BROCHURE",
 "layout": "horizontal",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#FFFFFF",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial CE",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1BCDBDCF_0699_4FB9_418A_2DB2E6D09A91",
 "left": "18.43%",
 "width": 130,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.openLink('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.504321003269!2d-101.55148842543042!3d20.966235089924467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b918e56de1b31%3A0xfae158ba706b778a!2sVillitas%20Diamante!5e1!3m2!1sen!2smx!4v1782525119013!5m2!1sen!2smx', '_self')",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "top": "30.39%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "20px",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "UBICACI\u00d3N",
 "rollOverShadow": false,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#FFFFFF",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial CE",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_24E3A9AC_0599_7647_4194_39E5C68136E8",
 "left": "18.62%",
 "width": 130,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "top": "15.03%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "20px",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "INICIO",
 "rollOverShadow": false,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#FFFFFF",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial CE",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1BF8723D_069B_54D1_416A_5968B3BA0916",
 "backgroundOpacity": 0,
 "width": 215.1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "right": "0%",
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "click": "this.openLink('https://wa.me/message/IWIQICJQALDHF1', '_blank')",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "12.58%",
 "iconBeforeLabel": true,
 "height": 40.05,
 "rollOverFontColor": "#00CC00",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "20px",
 "class": "Button",
 "pressedBackgroundOpacity": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "AGENDA TU CITA",
 "layout": "horizontal",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#FFFFFF",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.8vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
