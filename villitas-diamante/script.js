(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 120,
  "yaw": 78.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2F5389C6_216E_8274_4182_EDA51D74E234",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 9.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -58.01,
    "yawSpeed": 13.9,
    "easing": "linear",
    "pitchSpeed": 6.68
   }
  ]
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "id": "window_226408E2_058A_F7FF_416F_173CD69F4EBE",
 "bodyBackgroundColorDirection": "vertical",
 "width": 600,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "bodyPaddingTop": 5,
 "shadowHorizontalLength": 3,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "class": "Window",
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "footerHeight": 5,
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_226658E7_058A_F7C5_4198_C437D5CC03D5",
  {
   "data": {
    "name": "WebFrame132410"
   },
   "width": "100%",
   "minHeight": 0,
   "backgroundColorDirection": "vertical",
   "url": "https://drive.google.com/file/d/1cBfkWW3EyxsqW6wjksiPEuaoH6uvh-JM/preview",
   "borderSize": 0,
   "scrollEnabled": true,
   "minWidth": 0,
   "paddingRight": 0,
   "class": "WebFrame",
   "backgroundColor": [],
   "insetBorder": false,
   "backgroundOpacity": 1,
   "paddingTop": 0,
   "paddingLeft": 0,
   "shadow": false,
   "borderRadius": 0,
   "paddingBottom": 0,
   "height": "89%",
   "propagateClick": false,
   "backgroundColorRatios": []
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "closeButtonIconHeight": 12,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "minHeight": 20,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "minWidth": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "shadow": true,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "gap": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window116268"
 }
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "id": "window_21DB28FB_029B_77B5_4192_CFC6DD1FCEB6",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "bodyPaddingTop": 5,
 "shadowHorizontalLength": 3,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "class": "Window",
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "",
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "footerHeight": 5,
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_21DB08FD_029B_77AD_40E8_561D2FD7B8C0",
  {
   "data": {
    "name": "WebFrame129868"
   },
   "width": "100%",
   "minHeight": 0,
   "backgroundColorDirection": "vertical",
   "url": "https://drive.google.com/file/d/1oGQGelp_l7UHvs6a2khFf8TexGxZAuy5/view?usp=sharing",
   "borderSize": 0,
   "scrollEnabled": true,
   "minWidth": 0,
   "paddingRight": 0,
   "class": "WebFrame",
   "backgroundColor": [],
   "insetBorder": false,
   "backgroundOpacity": 1,
   "paddingTop": 0,
   "paddingLeft": 0,
   "shadow": false,
   "borderRadius": 0,
   "paddingBottom": 0,
   "height": "89%",
   "propagateClick": false,
   "backgroundColorRatios": []
  }
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "closeButtonIconHeight": 12,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "minHeight": 20,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "minWidth": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "shadow": true,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "gap": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window129349"
 }
},
{
 "items": [
  {
   "media": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.album_1600C4DB_076E_D95D_418F_0918736510B0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.video_15EE2F85_0797_27B5_4181_E5F0A92F0F70",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "rotationY": 0,
 "yaw": -37.7,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 1.8,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_14BD52F0_0795_D96B_4186_DB880A593682",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_14BD52F0_0795_D96B_4186_DB880A593682_0_1.png",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -0.69,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "items": [
  {
   "media": "this.video_15EE2F85_0797_27B5_4181_E5F0A92F0F70",
   "start": "this.viewer_uid2C92F90D_216E_83F6_4177_97688CA9B499VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2F6E1931_216E_822F_41A2_DA7EB1E9A662, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2F6E1931_216E_822F_41A2_DA7EB1E9A662, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid2C92F90D_216E_83F6_4177_97688CA9B499VideoPlayer)",
   "player": "this.viewer_uid2C92F90D_216E_83F6_4177_97688CA9B499VideoPlayer"
  }
 ],
 "id": "PlayList_2F6E1931_216E_822F_41A2_DA7EB1E9A662",
 "class": "PlayList"
},
{
 "label": "casa club",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_15EE2F85_0797_27B5_4181_E5F0A92F0F70_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_15EE2F85_0797_27B5_4181_E5F0A92F0F70",
 "class": "Video",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_15EE2F85_0797_27B5_4181_E5F0A92F0F70.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 120,
  "yaw": 9.31,
  "class": "PanoramaCameraPosition",
  "pitch": -58.01
 },
 "id": "panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_camera"
},
{
 "items": [
  {
   "media": "this.video_25F4A75F_058A_DA6B_4167_145C7840B7C3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_2C948912_216E_83ED_419B_3DCE70BC9D10, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2C948912_216E_83ED_419B_3DCE70BC9D10, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_2C948912_216E_83ED_419B_3DCE70BC9D10",
 "class": "PlayList"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -101.92,
   "yaw": 136.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0"
  }
 ],
 "thumbnailUrl": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_t.jpg",
 "label": "100_0205_20260622212210",
 "id": "panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2",
 "pitch": -28.34,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 123.32,
 "class": "Panorama",
 "overlays": [
  "this.overlay_14ED28C8_02BB_35CA_416B_ADE0884E8538",
  "this.overlay_1406EBFD_02B9_CBC4_417A_1EFD6A226311",
  "this.overlay_147E9FA9_02B7_4C42_417B_8916557E739A"
 ]
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "villitas 2 vista ACTUALIZACION DISPONIBLES ROJO",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF"
  },
  {
   "backwardYaw": 136.21,
   "yaw": -101.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2"
  }
 ],
 "thumbnailUrl": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_t.jpg",
 "id": "panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0",
 "pitch": -7.33,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 159.53,
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
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -43.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2F3FEA0B_216E_81FC_4171_64CCAF7E5884",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": -141.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.69,
    "yawSpeed": 216,
    "easing": "cubic_in_out",
    "pitchSpeed": 73.99
   },
   {
    "targetYaw": -139.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -42.5,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 11.95
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_camera",
 "initialPosition": {
  "yaw": -128.47,
  "class": "PanoramaCameraPosition",
  "pitch": 2.72
 }
},
{
 "id": "ImageResource_12D9D02F_0795_78F5_4197_0EC561F82D6F",
 "class": "ImageResource",
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
 ]
},
{
 "label": "ChatGPT Image Jun 27, 2026, 07_12_17 AM",
 "id": "album_1600C4DB_076E_D95D_418F_0918736510B0_0",
 "thumbnailUrl": "media/album_1600C4DB_076E_D95D_418F_0918736510B0_0_t.png",
 "width": 1122,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_1600C4DB_076E_D95D_418F_0918736510B0_0.png"
   }
  ]
 },
 "duration": 5000,
 "height": 1402
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -141.87,
  "class": "PanoramaCameraPosition",
  "pitch": -30.69
 },
 "id": "panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": -139.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -42.5,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 11.95
   }
  ]
 }
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ENTRADA VILLITAS",
 "id": "panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF",
 "thumbnailUrl": "media/panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_19E49EFF_058A_CA26_4190_09759880E9E7"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_19280691_05BB_3ACF_4196_E60C0CE86CBF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.album_1600C4DB_076E_D95D_418F_0918736510B0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.video_15EE2F85_0797_27B5_4181_E5F0A92F0F70",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 0)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "label": "Album de Fotos ChatGPT Image Jun 27, 2026, 07_12_17 AM",
 "thumbnailUrl": "media/album_1600C4DB_076E_D95D_418F_0918736510B0_t.png",
 "playList": "this.album_1600C4DB_076E_D95D_418F_0918736510B0_AlbumPlayList",
 "id": "album_1600C4DB_076E_D95D_418F_0918736510B0",
 "class": "PhotoAlbum"
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [],
 "bodyPaddingRight": 0,
 "id": "window_2A148B20_2163_862D_41A1_17DE644169B1",
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "horizontalAlign": "center",
 "bodyBackgroundOpacity": 0,
 "bodyPaddingTop": 0,
 "headerVerticalAlign": "middle",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "class": "Window",
 "paddingRight": 0,
 "closeButtonBorderColor": "#000000",
 "backgroundColor": [],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedIconLineWidth": 5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "closeButtonRollOverBorderColor": "#000000",
 "paddingLeft": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "footerBackgroundOpacity": 0,
 "footerHeight": 5,
 "veilOpacity": 0.4,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBorderSize": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uid2C92F90D_216E_83F6_4177_97688CA9B499"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "closeButtonIconHeight": 20,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "minHeight": 20,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "minWidth": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "shadow": true,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "headerBackgroundOpacity": 0,
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window486"
 },
 "closeButtonPressedBorderSize": 0
},
{
 "label": "villitas video render",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_25F4A75F_058A_DA6B_4167_145C7840B7C3_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_25F4A75F_058A_DA6B_4167_145C7840B7C3",
 "class": "Video",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_25F4A75F_058A_DA6B_4167_145C7840B7C3.mp4"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -65.65,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.05,
 "id": "popup_1560878B_0797_E7BD_4187_37160B74F1D2",
 "autoplay": true,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -42.58,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_15EE2F85_0797_27B5_4181_E5F0A92F0F70.mp4"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.15,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "height": "100%",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "minHeight": 50,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "minWidth": 100,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "height": 641,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "UIComponent2121"
 },
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "class": "UIComponent",
 "top": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.55,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "data": {
  "name": "ZoomImage2122"
 },
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "class": "ZoomImage",
 "top": 0,
 "backgroundColor": [],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "backgroundColorRatios": []
},
{
 "fontFamily": "Arial",
 "rollOverIconColor": "#666666",
 "data": {
  "name": "CloseButton2123"
 },
 "id": "closeButtonPopupPanorama",
 "layout": "horizontal",
 "fontWeight": "normal",
 "fontSize": "1.29vmin",
 "horizontalAlign": "center",
 "right": 10,
 "minHeight": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "borderColor": "#000000",
 "minWidth": 0,
 "top": 10,
 "verticalAlign": "middle",
 "paddingRight": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "class": "CloseButton",
 "label": "",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.3,
 "paddingTop": 5,
 "paddingLeft": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "pressedIconColor": "#888888",
 "paddingBottom": 5,
 "gap": 5,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "iconWidth": 20
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 58,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 58,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 58,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "maxWidth": 58,
 "maxHeight": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 58,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 58,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "id": "htmlText_226658E7_058A_F7C5_4198_C437D5CC03D5",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "class": "HTMLText",
 "height": "10%",
 "paddingTop": 10,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText116269"
 }
},
{
 "id": "htmlText_21DB08FD_029B_77AD_40E8_561D2FD7B8C0",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "class": "HTMLText",
 "height": "10%",
 "paddingTop": 10,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText129350"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "horizontalAlign": "center",
 "right": 10,
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "minWidth": 50,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "mode": "push",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "horizontalAlign": "center",
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "minWidth": 50,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "mode": "push",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "viewerArea": "this.viewer_uid2C92F90D_216E_83F6_4177_97688CA9B499",
 "id": "viewer_uid2C92F90D_216E_83F6_4177_97688CA9B499VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0, this.camera_2F5389C6_216E_8274_4182_EDA51D74E234); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.16,
   "pitch": -9.36,
   "yaw": 136.21,
   "image": "this.AnimatedImageResource_20048F88_0589_CA30_418B_6169CED2AFA4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_14ED28C8_02BB_35CA_416B_ADE0884E8538",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 9.16,
   "yaw": 136.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 20.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_1_0.png",
      "width": 504,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ]
   },
   "pitch": -5.3,
   "yaw": 137.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1406EBFD_02B9_CBC4_417A_1EFD6A226311",
 "data": {
  "label": "VILLITAS DIAMANTE"
 },
 "maps": [
  {
   "hfov": 20.16,
   "yaw": 137.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 58.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_2_0.png",
      "width": 1460,
      "class": "ImageResourceLevel",
      "height": 237
     }
    ]
   },
   "pitch": 1.76,
   "yaw": -145.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_147E9FA9_02B7_4C42_417B_8916557E739A",
 "data": {
  "label": "VILLITAS RESIDENCIAL"
 },
 "maps": [
  {
   "hfov": 58.53,
   "yaw": -145.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_2_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 1.76
  }
 ]
},
{
 "bleaching": 0.43,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 13.43,
 "yaw": -22.93,
 "id": "overlay_0C7075D6_0279_7C45_417A_73738956098A",
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.14,
   "pitch": -40.63,
   "yaw": -61.81,
   "image": "this.AnimatedImageResource_152C88D6_0793_6957_418C_B46D6BD20582",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_16606494_028A_FCC4_4160_838E6110B448",
 "data": {
  "label": "Caseta"
 },
 "maps": [
  {
   "hfov": 5.14,
   "yaw": -61.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 22.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_1_0.png",
      "width": 558,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": -4.41,
   "yaw": -101.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_164F69C4_028F_3444_417D_42473BF7323A",
 "data": {
  "label": "VILLITAS RESIDENCIAL"
 },
 "maps": [
  {
   "hfov": 22.5,
   "yaw": -101.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_1_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 25.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_1_HS_4_0.png",
      "width": 642,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 0.48,
   "yaw": -80.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_14D0B0E4_029B_7427_4182_715178DB6496",
 "data": {
  "label": "SANTA ANA DEL CONDE"
 },
 "maps": [
  {
   "hfov": 25.92,
   "yaw": -80.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_1_HS_4_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 42.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_1_HS_5_0.png",
      "width": 1053,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ]
   },
   "pitch": 1.98,
   "yaw": 66.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1493C162_0296_D429_4179_693D1D64A171",
 "data": {
  "label": "PUERTO INTERIOR"
 },
 "maps": [
  {
   "hfov": 42.51,
   "yaw": 66.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_1_HS_5_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_6_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": -45.82,
   "roll": 0,
   "yaw": -41.15,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2618DB03_0597_4BF8_4192_E7286F68BF03",
 "data": {
  "label": "DISPONIBLES -DIV-406"
 },
 "maps": [
  {
   "hfov": 10.7,
   "yaw": -41.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_6_1_0_map.gif",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -45.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_7_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ]
   },
   "pitch": -39.37,
   "roll": 0,
   "yaw": -30.79,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_27B21191_058B_561F_4177_D7FCC2AC12A7",
 "data": {
  "label": "DISPONIBLES DIV-406"
 },
 "maps": [
  {
   "hfov": 8.72,
   "yaw": -30.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_7_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ]
   },
   "pitch": -39.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_8_0.png",
      "width": 250,
      "class": "ImageResourceLevel",
      "height": 227
     }
    ]
   },
   "pitch": -59.07,
   "roll": 0,
   "yaw": -49.38,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_277C7674_0589_DA07_4192_0C8916DF964D",
 "data": {
  "label": "DISPONIBLES DIV-405"
 },
 "maps": [
  {
   "hfov": 10.08,
   "yaw": -49.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_8_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ]
   },
   "pitch": -59.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 19.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_9_0.png",
      "width": 487,
      "class": "ImageResourceLevel",
      "height": 327
     }
    ]
   },
   "pitch": -50.48,
   "roll": 0,
   "yaw": -31.37,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_27B1568B_058F_FA07_4160_428C7E20A932",
 "data": {
  "label": "DISPONIBLES DIV.405"
 },
 "maps": [
  {
   "hfov": 19.49,
   "yaw": -31.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_9_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ]
   },
   "pitch": -50.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.14,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_10_0.png",
      "width": 127,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ]
   },
   "pitch": -43.64,
   "roll": 0,
   "yaw": -15.14,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_19EE772C_0589_5A1C_4185_F33CD2EE77FE",
 "data": {
  "label": "DISPONIBLES  DIV-405"
 },
 "maps": [
  {
   "hfov": 5.14,
   "yaw": -15.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_10_1_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": -43.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_11_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 228
     }
    ]
   },
   "pitch": -69.46,
   "roll": 0,
   "yaw": -24.52,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26BBBF7D_058B_4AFE_4191_A79413BD819A",
 "data": {
  "label": "DISPONIBLES DIV-404"
 },
 "maps": [
  {
   "hfov": 10.41,
   "yaw": -24.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_11_1_0_map.gif",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "pitch": -69.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_263D0A3E_0589_CA78_4190_52A96D3A4891",
 "data": {
  "label": "DISPONIBLES DIV-404"
 },
 "maps": [
  {
   "hfov": 15.51,
   "yaw": -9.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_12_1_0_map.gif",
      "width": 193,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": -54.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_13_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": -45,
   "roll": 0,
   "yaw": -7.04,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_19D592A0_05F7_5A08_418D_FC9388E25D06",
 "data": {
  "label": "DISPONIBLES DIV-404"
 },
 "maps": [
  {
   "hfov": 6.91,
   "yaw": -7.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_13_1_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ]
   },
   "pitch": -45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_14_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "pitch": -45.93,
   "roll": 0,
   "yaw": 4.67,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26A47458_05F9_3E3A_4196_27FAA071DC53",
 "data": {
  "label": "DISPONIBLES DIV -404"
 },
 "maps": [
  {
   "hfov": 4.53,
   "yaw": 4.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_14_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ]
   },
   "pitch": -45.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_15_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 269
     }
    ]
   },
   "pitch": -71.25,
   "roll": 0,
   "yaw": 28.39,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26A709AB_05FB_761C_4197_8BDD7CFC948D",
 "data": {
  "label": "DISPONIBLES DIV-403"
 },
 "maps": [
  {
   "hfov": 12.86,
   "yaw": 28.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_15_1_0_map.gif",
      "width": 159,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ]
   },
   "pitch": -71.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.32,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_16_0.png",
      "width": 331,
      "class": "ImageResourceLevel",
      "height": 469
     }
    ]
   },
   "pitch": -58.43,
   "roll": 0,
   "yaw": 15.92,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_19C16AE9_05F9_4A1E_4163_9B12F6919DD5",
 "data": {
  "label": "DISPONIBLES DIV-403"
 },
 "maps": [
  {
   "hfov": 13.32,
   "yaw": 15.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_16_1_0_map.gif",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -58.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_17_0.png",
      "width": 345,
      "class": "ImageResourceLevel",
      "height": 161
     }
    ]
   },
   "pitch": -45.25,
   "roll": 0,
   "yaw": 17.07,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_271B11A3_05FE_D611_4192_8AA311EB010C",
 "data": {
  "label": "DISPONIBLES DIV-403"
 },
 "maps": [
  {
   "hfov": 13.87,
   "yaw": 17.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_17_1_0_map.gif",
      "width": 172,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -45.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_18_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -63.04,
   "roll": 0,
   "yaw": 60.62,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_27F9727B_05FA_DAF7_4193_341724622E89",
 "data": {
  "label": "DISPONIBLES DIV-402"
 },
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 60.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_18_1_0_map.gif",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ]
   },
   "pitch": -63.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_19_0.png",
      "width": 437,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": -53.76,
   "roll": 0,
   "yaw": 39.14,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_263EE11A_05FA_D637_4183_E7E3EEF1D4C0",
 "data": {
  "label": "DISPONIBLES DIV-402"
 },
 "maps": [
  {
   "hfov": 17.5,
   "yaw": 39.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_19_1_0_map.gif",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -53.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.73,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_20_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 143
     }
    ]
   },
   "pitch": -43.54,
   "roll": 0,
   "yaw": 30.58,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_19F50EB6_05F9_4A7C_4195_90406AE021BE",
 "data": {
  "label": "DISPONIBLES DIV-402"
 },
 "maps": [
  {
   "hfov": 8.73,
   "yaw": 30.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_20_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   },
   "pitch": -43.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_21_0.png",
      "width": 210,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -51.67,
   "roll": 0,
   "yaw": 75.23,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_262AE36E_0589_5AE9_4189_4653CB232528",
 "data": {
  "label": "DISPONIBLES DIV-401"
 },
 "maps": [
  {
   "hfov": 8.5,
   "yaw": 75.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_21_1_0_map.gif",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -51.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_22_0.png",
      "width": 460,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ]
   },
   "pitch": -48.33,
   "roll": 0,
   "yaw": 55.05,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26077D7F_058F_4EE6_4191_395A36A96956",
 "data": {
  "label": "DISPONIBLES DIV-401"
 },
 "maps": [
  {
   "hfov": 18.41,
   "yaw": 55.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_22_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 181
     }
    ]
   },
   "pitch": -48.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_23_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ]
   },
   "pitch": -39.1,
   "roll": 0,
   "yaw": 45.63,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26A8CDB9_0589_4E6C_418D_C9ED31A56585",
 "data": {
  "label": "DISPONIBLES DIV-401"
 },
 "maps": [
  {
   "hfov": 10.69,
   "yaw": 45.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_23_1_0_map.gif",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ]
   },
   "pitch": -39.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_24_0.png",
      "width": 205,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ]
   },
   "pitch": -44.24,
   "roll": 0,
   "yaw": 80.73,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26B2DB81_058B_4A1F_4181_736F641FCF24",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "maps": [
  {
   "hfov": 8.29,
   "yaw": 80.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_24_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": -44.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_25_0.png",
      "width": 332,
      "class": "ImageResourceLevel",
      "height": 209
     }
    ]
   },
   "pitch": -40.04,
   "roll": 0,
   "yaw": 63.21,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26B9BB1A_058A_CA23_417B_0E00508669BC",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "maps": [
  {
   "hfov": 13.35,
   "yaw": 63.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_25_1_0_map.gif",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ]
   },
   "pitch": -40.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_26_0.png",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ]
   },
   "pitch": -36.04,
   "roll": 0,
   "yaw": 52.95,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_26264FB7_0589_CA61_4188_101EB9F8418D",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "maps": [
  {
   "hfov": 5.54,
   "yaw": 52.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_26_1_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 44
     }
    ]
   },
   "pitch": -36.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_27_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   },
   "pitch": -35.4,
   "roll": 0,
   "yaw": 69.46,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_19A2946D_0596_DEE1_416C_52EF2F66AB1F",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "maps": [
  {
   "hfov": 4.96,
   "yaw": 69.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_27_1_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 48
     }
    ]
   },
   "pitch": -35.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_28_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ]
   },
   "pitch": -34.16,
   "roll": 0,
   "yaw": 65.54,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2741D491_0597_FE20_4193_EBC56EF2B069",
 "data": {
  "label": "DISPONIBLES DIV-400"
 },
 "maps": [
  {
   "hfov": 5.05,
   "yaw": 65.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_28_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 43
     }
    ]
   },
   "pitch": -34.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_29_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ]
   },
   "pitch": -38.3,
   "yaw": -62.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_23776595_029A_DE7D_4199_D3CE2DDF6F64",
 "data": {
  "label": "ACCESO"
 },
 "maps": [
  {
   "hfov": 7.53,
   "yaw": -62.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_29_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_30_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ]
   },
   "pitch": 0.31,
   "yaw": -35.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_15E8E7CE_0775_27B7_4191_118C65309AF0",
 "data": {
  "label": "\u000dLE\u00d3N\u000d"
 },
 "maps": [
  {
   "hfov": 11.17,
   "yaw": -35.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_30_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_14BD52F0_0795_D96B_4186_DB880A593682, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_12D9D02F_0795_78F5_4197_0EC561F82D6F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.17,
   "pitch": -0.69,
   "yaw": -37.7,
   "image": "this.AnimatedImageResource_12BD7FF6_0795_6757_419A_6CFF15A3689E",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1435D034_0775_38EA_4183_80668DCC4516",
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "hfov": 3.17,
   "yaw": -37.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_31_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2, this.camera_2F3FEA0B_216E_81FC_4171_64CCAF7E5884); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.06,
   "pitch": -7.49,
   "yaw": -101.92,
   "image": "this.AnimatedImageResource_117867D6_07AD_2757_4197_EDF509BB2138",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_15CBE60A_0797_78BF_4187_C84360DACF57",
 "data": {
  "label": "Circle 03b"
 },
 "maps": [
  {
   "hfov": 5.06,
   "yaw": -101.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_32_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1560878B_0797_E7BD_4187_37160B74F1D2, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_2A148B20_2163_862D_41A1_17DE644169B1, this.video_15EE2F85_0797_27B5_4181_E5F0A92F0F70, this.PlayList_2F6E1931_216E_822F_41A2_DA7EB1E9A662, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.05,
   "pitch": -42.58,
   "yaw": -65.65,
   "image": "this.AnimatedImageResource_1529B8DB_0793_695D_4173_6E4D83E027E7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_152FE2DD_07BD_3955_418D_EEC3D4165C90",
 "data": {
  "label": "Circle 03b"
 },
 "maps": [
  {
   "hfov": 5.05,
   "yaw": -65.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_33_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_34_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": -44.65,
   "yaw": -64.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_14DD9A21_0796_E8ED_4181_1861464ED6FE",
 "data": {
  "label": "SALON "
 },
 "maps": [
  {
   "hfov": 5.99,
   "yaw": -64.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_34_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.65
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_25F4A75F_058A_DA6B_4167_145C7840B7C3.mp4"
 },
 "enabledInCardboard": true,
 "id": "overlay_19E49EFF_058A_CA26_4190_09759880E9E7",
 "hfov": 38.42,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_19E49EFF_058A_CA26_4190_09759880E9E7_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ]
 },
 "pitch": 23.82,
 "useHandCursor": true,
 "roll": -1.02,
 "yaw": -101.51,
 "rotationY": 4.69,
 "rotationX": -26.25,
 "click": "this.overlay_19E49EFF_058A_CA26_4190_09759880E9E7.play()",
 "videoVisibleOnStop": false,
 "autoplay": false,
 "vfov": 29.26,
 "class": "VideoPanoramaOverlay",
 "distance": 50,
 "data": {
  "label": "Video"
 }
},
{
 "items": [
  {
   "media": "this.album_1600C4DB_076E_D95D_418F_0918736510B0_0",
   "camera": {
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.29",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.68"
    },
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_1600C4DB_076E_D95D_418F_0918736510B0_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uid2C92F90D_216E_83F6_4177_97688CA9B499",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "height": "100%",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "minHeight": 50,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "minWidth": 100,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "data": {
  "name": "ViewerArea2120"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "class": "Container",
 "height": 110,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "91.304%",
 "minWidth": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "height": "85.959%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 3,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "10%",
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "10%",
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "class": "Container",
 "top": "10%",
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_171D2139_0299_742F_416A_6ADD1CCBBAC2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_20048F88_0589_CA30_418B_6169CED2AFA4",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_152C88D6_0793_6957_418C_B46D6BD20582",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_31_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_12BD7FF6_0795_6757_419A_6CFF15A3689E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_32_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_117867D6_07AD_2757_4197_EDF509BB2138",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0E57AE17_0277_CFC4_4180_771A198FC9B0_0_HS_33_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1529B8DB_0793_695D_4173_6E4D83E027E7",
 "frameDuration": 41
},
{
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "Container black"
 },
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.4,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "minWidth": 1,
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "top": "40%",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "maxWidth": 80,
 "maxHeight": 80,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "90%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "cursor": "hand",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "horizontalAlign": "center",
 "right": 9,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "minWidth": 1,
 "bottom": "40%",
 "verticalAlign": "middle",
 "top": "40%",
 "mode": "push",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingRight": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "maxWidth": 50,
 "maxHeight": 50,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "85%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "50%",
 "minWidth": 460,
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "paddingLeft": 50,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 20,
 "gap": 0,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "horizontalAlign": "center",
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "25%",
 "minWidth": 50,
 "paddingRight": 0,
 "mode": "push",
 "verticalAlign": "middle",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMode": "normal",
 "left": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "italic",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "horizontalAlign": "center",
 "width": "100%",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "class": "ThumbnailGrid",
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "height": "92%",
 "itemOpacity": 1,
 "paddingLeft": 70,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "propagateClick": true,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "minHeight": 1,
 "borderSize": 0,
 "itemMinHeight": 50,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "shadow": false,
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "borderRadius": 5,
 "gap": 26,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemHeight": 160,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "data": {
  "name": "WebFrame"
 },
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderSize": 0,
 "scrollEnabled": true,
 "minWidth": 1,
 "paddingRight": 0,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "height": "100%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "horizontalAlign": "center",
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "25%",
 "minWidth": 50,
 "paddingRight": 0,
 "mode": "push",
 "verticalAlign": "middle",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.15,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "height": "99.975%",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "minWidth": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "height": 140,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "55%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "45%",
 "minWidth": 460,
 "scrollBarMargin": 2,
 "paddingRight": 60,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "paddingLeft": 60,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 20,
 "gap": 0,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "horizontalAlign": "center",
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "25%",
 "minWidth": 50,
 "paddingRight": 0,
 "mode": "push",
 "verticalAlign": "middle",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "layout": "absolute",
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
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "scrollBarOpacity": 0.53,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- Buttons set"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "class": "Container",
 "paddingRight": 40,
 "verticalAlign": "top",
 "shadowBlurRadius": 92,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1,
 "shadowHorizontalLength": 3,
 "backgroundOpacity": 0.84,
 "shadowOpacity": 0,
 "paddingTop": 40,
 "paddingLeft": 40,
 "shadow": true,
 "borderRadius": 0,
 "paddingBottom": 40,
 "gap": 10,
 "height": "100%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.31
 ]
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "right",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 100,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 30,
 "gap": 10,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "100%",
 "minWidth": 50,
 "paddingRight": 0,
 "mode": "push",
 "verticalAlign": "top",
 "class": "IconButton",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "36.14%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "100%",
 "minWidth": 50,
 "paddingRight": 0,
 "mode": "push",
 "verticalAlign": "top",
 "class": "IconButton",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "height": "36.14%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.15,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "height": "100%",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "minWidth": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "10%",
 "minWidth": 50,
 "paddingRight": 0,
 "mode": "push",
 "verticalAlign": "top",
 "class": "IconButton",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "height": "10%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minWidth": 1,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "right",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "height": "5%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 100,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 30,
 "gap": 10,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-1"
 },
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
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "minWidth": 1,
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "class": "Container",
 "top": "25%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-2"
 },
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
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "minWidth": 1,
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "class": "Container",
 "top": "25%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-3"
 },
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
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "minWidth": 1,
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "class": "Container",
 "top": "25%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-4"
 },
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
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "minWidth": 1,
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "class": "Container",
 "top": "25%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-5"
 },
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
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "minWidth": 1,
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "class": "Container",
 "top": "25%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-6"
 },
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
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "minWidth": 1,
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "class": "Container",
 "top": "25%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "HTMLText_1E50287E_07B6_F55C_4191_9597622D8751",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "width": "99.078%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "class": "HTMLText",
 "top": "0.03%",
 "height": "17.117%",
 "paddingTop": 20,
 "paddingLeft": 20,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:40px;font-family:'Arial CYR';\">VILLITAS</SPAN><SPAN STYLE=\"color:#ffffff;font-size:33px;font-family:'Arial CYR';\"> </SPAN><SPAN STYLE=\"color:#ffffff;font-size:18px;font-family:'Arial CE';\">DIAMANTE</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText53815"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "BOTONES MENU"
 },
 "children": [
  "this.Button_1EDFB48A_07B7_3DA5_415B_17F5526F307F",
  "this.Button_18EA5A81_0697_55A7_4179_87A358ACF131",
  "this.Button_1BCDBDCF_0699_4FB9_418A_2DB2E6D09A91",
  "this.Button_24E3A9AC_0599_7647_4194_39E5C68136E8",
  "this.Button_1BF8723D_069B_54D1_416A_5968B3BA0916"
 ],
 "id": "Container_231B20A5_0289_D656_419A_4BBA41FF1DE4",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "top": "17.01%",
 "height": "55.135%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "class": "HTMLText",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.19vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 180,
 "fontSize": "2.39vh",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": 50,
 "fontWeight": "bold",
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "label": "LOREM IPSUM",
 "backgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "class": "Button",
 "paddingLeft": 0,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 50,
 "paddingBottom": 0,
 "gap": 5,
 "textDecoration": "none",
 "propagateClick": false,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "HTMLText",
 "height": "46%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.19vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "layout": "horizontal",
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "height": "75%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "class": "Button",
 "label": "BACK",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 5,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "height": 8,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Main Entrance",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lobby",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedLabel": "Reception",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Reception",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Meeting Area 1",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Meeting Area 2",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Bar",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Chill Out",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Terrace",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Garden",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "class": "Button",
 "label": "BACK",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 5,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "height": 8,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "class": "Button",
 "label": "BACK",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 5,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "height": 8,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "class": "Button",
 "label": "BACK",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 5,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "height": 8,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "class": "Button",
 "label": "BACK",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 5,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "height": 8,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "class": "Button",
 "label": "BACK",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 5,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "layout": "absolute",
 "data": {
  "name": "line"
 },
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "height": 8,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "Lorem Ipsum",
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "cursor": "hand",
 "fontFamily": "Arial CE",
 "backgroundColorRatios": [
  0,
  0.82
 ],
 "rollOverBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "id": "Button_1EDFB48A_07B7_3DA5_415B_17F5526F307F",
 "layout": "horizontal",
 "rollOverBackgroundColor": [],
 "width": 181,
 "data": {
  "name": "Button house info"
 },
 "shadowColor": "#000000",
 "fontSize": "20px",
 "horizontalAlign": "center",
 "right": "7.37%",
 "minHeight": 1,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "rollOverFontColor": "#FF9933",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "bottom": "27.78%",
 "verticalAlign": "middle",
 "class": "Button",
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 63,
 "shadowSpread": 1,
 "label": "FINANCIAMIENTO",
 "mode": "push",
 "height": 41,
 "click": "this.showWindow(this.window_21DB28FB_029B_77B5_4192_CFC6DD1FCEB6, null, false)",
 "iconHeight": 0,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0,
 "shadowOpacity": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": true,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontStyle": "normal",
 "textDecoration": "none",
 "pressedBackgroundOpacity": 0,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0
},
{
 "cursor": "hand",
 "fontFamily": "Arial CE",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_18EA5A81_0697_55A7_4179_87A358ACF131",
 "left": "19.82%",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 130,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "data": {
  "name": "Button house info"
 },
 "fontSize": "20px",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverFontColor": "#DB9B4D",
 "pressedLabel": "BROCHURE",
 "bottom": "42.81%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "BROCHURE",
 "height": 40,
 "layout": "horizontal",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.showWindow(this.window_226408E2_058A_F7FF_416F_173CD69F4EBE, null, false)",
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "textDecoration": "none",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 0,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0
},
{
 "fontFamily": "Arial CE",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1BCDBDCF_0699_4FB9_418A_2DB2E6D09A91",
 "left": "18.43%",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 130,
 "data": {
  "name": "Button house info"
 },
 "fontSize": "20px",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "minWidth": 1,
 "top": "30.39%",
 "rollOverFontColor": "#DB9B4D",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "UBICACI\u00d3N",
 "height": 40,
 "layout": "horizontal",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.openLink('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.504321003269!2d-101.55148842543042!3d20.966235089924467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b918e56de1b31%3A0xfae158ba706b778a!2sVillitas%20Diamante!5e1!3m2!1sen!2smx!4v1782525119013!5m2!1sen!2smx', '_self')",
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0
},
{
 "fontFamily": "Arial CE",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_24E3A9AC_0599_7647_4194_39E5C68136E8",
 "left": "18.62%",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 130,
 "data": {
  "name": "Button house info"
 },
 "fontSize": "20px",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "minWidth": 1,
 "top": "15.03%",
 "rollOverFontColor": "#DB9B4D",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "INICIO",
 "height": 40,
 "layout": "horizontal",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0
},
{
 "cursor": "hand",
 "fontFamily": "Arial CE",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1BF8723D_069B_54D1_416A_5968B3BA0916",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "width": 215.1,
 "data": {
  "name": "Button house info"
 },
 "fontSize": "20px",
 "horizontalAlign": "center",
 "right": "0%",
 "minHeight": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverFontColor": "#00CC00",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "bottom": "12.58%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "label": "AGENDA TU CITA",
 "height": 40.05,
 "click": "this.openLink('https://wa.me/message/IWIQICJQALDHF1', '_blank')",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "gap": 5,
 "backgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "textDecoration": "none",
 "shadowSpread": 1,
 "pressedBackgroundOpacity": 0,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0
},
{
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "width": "25%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minWidth": 1,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Image",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 200,
 "maxHeight": 200,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderSize": 0,
 "width": "75%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "class": "HTMLText",
 "height": "100%",
 "paddingTop": 0,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "data": {
  "name": "Player468"
 },
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
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "overflow": "visible",
 "borderSize": 0,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getKey": function(key){  return window[key]; }
 },
 "minWidth": 20,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "downloadEnabled": false,
 "contentOpaque": false,
 "verticalAlign": "top",
 "class": "Player",
 "paddingTop": 0,
 "paddingLeft": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "gap": 10,
 "height": "100%",
 "propagateClick": true,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false
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
