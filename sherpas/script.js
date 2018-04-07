TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": false,
  "label": "almac\u00e9n.74",
  "hfovMin": 60,
  "id": "panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_955CF967_9CE4_A68E_41E1_A2562BD620E0",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_4_0.png",
           "height": 320,
           "class": "ImageResourceLevel",
           "width": 226
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.5,
        "roll": 0,
        "pitch": 7.52,
        "yaw": 144.82
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_96B39DB8_9F14_EF34_41C3_3A3EBBB59DCA, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}) } else { this.showPopupMedia(this.window_96EA203C_9F14_D52C_4180_C3572EE29D4C, this.video_968A24CB_9F15_DD54_41C0_A90A125DEFFE, this.PlayList_95F52527_9F77_BCDC_41C1_A88AD81BD134, '95%', '95%', true, true); this.PlayList_95F52527_9F77_BCDC_41C1_A88AD81BD134.set('selectedIndex', 0); ; this.viewer_uid95FDB515_9F77_BCFC_41C5_101DF198C0D4VideoPlayer.play(); ; this.pauseGlobalAudios() }",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_4_1_0_map.gif",
           "height": 160,
           "class": "ImageResourceLevel",
           "width": 113
          }
         ]
        },
        "pitch": 7.52,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 144.82,
        "hfov": 13.5
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_965FECAC_9CE5_5F82_41D0_4C8F6379991D",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_0_0.png",
           "height": 342,
           "class": "ImageResourceLevel",
           "width": 257
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.38,
        "roll": 0,
        "pitch": 9.84,
        "yaw": -125.46
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_9699324B_9CFD_EA86_41E0_4973EF4792C8, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}) } else { this.showPopupMedia(this.window_99AF3A6B_9F14_F554_41A9_76122DF706F0, this.video_967D3503_9CFC_AE86_4181_C7F652973BDF, this.PlayList_95F5D527_9F77_BCDC_41D6_FD235BFA7265, '95%', '95%', true, true); this.PlayList_95F5D527_9F77_BCDC_41D6_FD235BFA7265.set('selectedIndex', 0); ; this.viewer_uid95FA4517_9F77_BCFC_41CF_271E0A51E3AAVideoPlayer.play(); ; this.pauseGlobalAudios() }",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_0_1_0_map.gif",
           "height": 171,
           "class": "ImageResourceLevel",
           "width": 128
          }
         ]
        },
        "pitch": 9.84,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -125.46,
        "hfov": 15.38
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "yaw": -125.46,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_9699324B_9CFD_EA86_41E0_4973EF4792C8",
      "hideDuration": 500,
      "hfov": 15.31,
      "loop": false,
      "pitch": 9.84,
      "popupMaxHeight": "95%",
      "video": {
       "height": 1080,
       "class": "VideoResource",
       "mp4Url": "media/video_967D3503_9CFC_AE86_4181_C7F652973BDF.mp4",
       "width": 1920
      },
      "autoplay": true
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "yaw": 144.82,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_96B39DB8_9F14_EF34_41C3_3A3EBBB59DCA",
      "hideDuration": 500,
      "hfov": 13.6,
      "loop": false,
      "pitch": 7.52,
      "popupMaxHeight": "95%",
      "video": {
       "height": 720,
       "class": "VideoResource",
       "mp4Url": "media/video_968A24CB_9F15_DD54_41C0_A90A125DEFFE.mp4",
       "width": 1280
      },
      "autoplay": true
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_9442D332_9F6C_BB34_41DC_78D3D383D4CD",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_10_0.png",
           "height": 92,
           "class": "ImageResourceLevel",
           "width": 92
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.57,
        "pitch": -3.64,
        "yaw": 177.08
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_94249242_9F6C_B554_41D7_C353E51CCF11, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}) } else { this.showPopupMedia(this.window_94E2056B_9F6C_BF54_41B1_CDC721D9B9EB, this.video_96E3526C_9F7D_752C_41D9_1BD8E4E47385, this.PlayList_9422CDD0_9F6C_AF73_41B3_5A1F5F61AB7C, '50%', '50%', true, true); this.PlayList_9422CDD0_9F6C_AF73_41B3_5A1F5F61AB7C.set('selectedIndex', 0); ; this.viewer_uid943F6DCA_9F6C_AF57_41DA_53B16E88DDFFVideoPlayer.play(); ; this.pauseGlobalAudios() }",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_10_0_0_map.gif",
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 46
          }
         ]
        },
        "pitch": -3.64,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 177.08,
        "hfov": 5.57
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "yaw": 177.08,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_94249242_9F6C_B554_41D7_C353E51CCF11",
      "hideDuration": 500,
      "hfov": 5.57,
      "loop": false,
      "pitch": -3.64,
      "popupMaxHeight": "50%",
      "video": {
       "height": 240,
       "class": "VideoResource",
       "mp4Url": "media/video_96E3526C_9F7D_752C_41D9_1BD8E4E47385.mp4",
       "width": 320
      },
      "autoplay": true
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_94652519_9F6D_5CF4_41D3_7708211089B0",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_9_0.png",
           "height": 92,
           "class": "ImageResourceLevel",
           "width": 92
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.57,
        "pitch": -3.19,
        "yaw": -101.84
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_94DB6383_9F6C_DBD5_41DD_E436FB7C1425, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}) } else { this.showPopupMedia(this.window_94937654_9F6C_DD73_41E0_990CD681ED43, this.video_96EB9011_9F7D_D4F5_41DB_D16351875951, this.PlayList_94229DD0_9F6C_AF73_41DC_57431A1B442F, '95%', '95%', true, true); this.PlayList_94229DD0_9F6C_AF73_41DC_57431A1B442F.set('selectedIndex', 0); ; this.viewer_uid943F2DCB_9F6C_AF55_41D7_2B923FC7B0A5VideoPlayer.play(); ; this.pauseGlobalAudios() }",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_9_0_0_map.gif",
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 46
          }
         ]
        },
        "pitch": -3.19,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -101.84,
        "hfov": 5.57
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "yaw": -101.84,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_94DB6383_9F6C_DBD5_41DD_E436FB7C1425",
      "hideDuration": 500,
      "hfov": 5.57,
      "loop": false,
      "pitch": -3.19,
      "popupMaxHeight": "95%",
      "video": {
       "height": 720,
       "class": "VideoResource",
       "mp4Url": "media/video_96EB9011_9F7D_D4F5_41DB_D16351875951.mp4",
       "width": 1280
      },
      "autoplay": true
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_9432AD5A_9F6F_6F74_4171_2031FDE50F45",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_8_0.png",
           "height": 92,
           "class": "ImageResourceLevel",
           "width": 92
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.55,
        "pitch": -5.88,
        "yaw": -141.17
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_94E7FD1A_9F6F_ACF4_41D5_7623B45F5C17, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}) } else { this.showPopupMedia(this.window_94B6BFF8_9F6F_AB33_41B5_9D1E9DD73BC0, this.video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326, this.PlayList_94225DD1_9F6C_AF75_41C3_E20C121E7D11, '95%', '95%', true, true); this.PlayList_94225DD1_9F6C_AF75_41C3_E20C121E7D11.set('selectedIndex', 0); ; this.viewer_uid943CFDCC_9F6C_AF53_41B8_09CB549E22CAVideoPlayer.play(); ; this.pauseGlobalAudios() }",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_0_HS_8_0_0_map.gif",
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 46
          }
         ]
        },
        "pitch": -5.88,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -141.17,
        "hfov": 5.55
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "yaw": -141.17,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_94E7FD1A_9F6F_ACF4_41D5_7623B45F5C17",
      "hideDuration": 500,
      "hfov": 5.55,
      "loop": false,
      "pitch": -5.88,
      "popupMaxHeight": "95%",
      "video": {
       "height": 720,
       "class": "VideoResource",
       "mp4Url": "media/video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326.mp4",
       "width": 1280
      },
      "autoplay": true
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_t.jpg"
   }
  ]
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "buttonCardboardView": "this.IconButton_9B2D4CAA_9CE4_BF81_41E2_E3BECAC43A2F",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -4.55,
   "class": "PanoramaCameraPosition",
   "yaw": 19.45
  },
  "id": "panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_camera"
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 1920,
  "height": 1080,
  "id": "video_967D3503_9CFC_AE86_4181_C7F652973BDF",
  "label": "on board insta",
  "thumbnailUrl": "media/video_967D3503_9CFC_AE86_4181_C7F652973BDF_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_967D3503_9CFC_AE86_4181_C7F652973BDF.mp4",
   "width": 1920
  }
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer"
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 1280,
  "height": 720,
  "id": "video_968A24CB_9F15_DD54_41C0_A90A125DEFFE",
  "label": "S. Lloren\u00e7",
  "thumbnailUrl": "media/video_968A24CB_9F15_DD54_41C0_A90A125DEFFE_t.jpg",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_968A24CB_9F15_DD54_41C0_A90A125DEFFE.mp4",
   "width": 1280
  }
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 1280,
  "height": 720,
  "id": "video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326",
  "label": "Motosx1000",
  "thumbnailUrl": "media/video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326_t.jpg",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326.mp4",
   "width": 1280
  }
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 320,
  "height": 240,
  "id": "video_96E3526C_9F7D_752C_41D9_1BD8E4E47385",
  "label": "sidecar trial de Ripoll '08 Zona 1",
  "thumbnailUrl": "media/video_96E3526C_9F7D_752C_41D9_1BD8E4E47385_t.jpg",
  "video": {
   "height": 240,
   "class": "VideoResource",
   "mp4Url": "media/video_96E3526C_9F7D_752C_41D9_1BD8E4E47385.mp4",
   "width": 320
  }
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 1280,
  "height": 720,
  "id": "video_96EB9011_9F7D_D4F5_41DB_D16351875951",
  "label": "BULTACO SHERPA 350 entrenando 8-5-16------1738",
  "thumbnailUrl": "media/video_96EB9011_9F7D_D4F5_41DB_D16351875951_t.jpg",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_96EB9011_9F7D_D4F5_41DB_D16351875951.mp4",
   "width": 1280
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_9B41F5D7_9CE4_A98F_41D3_78EDEAF4B9DC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.video_967D3503_9CFC_AE86_4181_C7F652973BDF",
    "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1, this.video_967D3503_9CFC_AE86_4181_C7F652973BDF)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerVideoPlayer"
   },
   {
    "media": "this.video_968A24CB_9F15_DD54_41C0_A90A125DEFFE",
    "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2, this.video_968A24CB_9F15_DD54_41C0_A90A125DEFFE)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerVideoPlayer"
   },
   {
    "media": "this.video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326",
    "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3, this.video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerVideoPlayer"
   },
   {
    "media": "this.video_96E3526C_9F7D_752C_41D9_1BD8E4E47385",
    "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4, this.video_96E3526C_9F7D_752C_41D9_1BD8E4E47385)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerVideoPlayer"
   },
   {
    "media": "this.video_96EB9011_9F7D_D4F5_41DB_D16351875951",
    "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 5, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5, this.video_96EB9011_9F7D_D4F5_41DB_D16351875951)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 0)",
    "player": "this.MainViewerVideoPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.video_968A24CB_9F15_DD54_41C0_A90A125DEFFE",
    "start": "this.changeBackgroundWhilePlay(this.PlayList_95F52527_9F77_BCDC_41C1_A88AD81BD134, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_95F52527_9F77_BCDC_41C1_A88AD81BD134, 0, this.video_968A24CB_9F15_DD54_41C0_A90A125DEFFE)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid95FDB515_9F77_BCFC_41C5_101DF198C0D4VideoPlayer)",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "minHeight": 50,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColorDirection": "vertical",
      "minWidth": 100,
      "toolTipTextShadowBlurRadius": 3,
      "progressRight": 0,
      "playbackBarHeadShadow": true,
      "progressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarLeft": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadHeight": 15,
      "progressBarOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBottom": 2,
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "progressHeight": 10,
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "id": "viewer_uid943E0DC9_9F6C_AF55_41D1_DA1E7BD49415",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingLeft": 6,
      "playbackBarHeadWidth": 6,
      "borderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "width": "100%",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBarBorderSize": 0,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "VideoPlayer",
     "id": "viewer_uid95FDB515_9F77_BCFC_41C5_101DF198C0D4VideoPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "PlayList_95F52527_9F77_BCDC_41C1_A88AD81BD134"
 },
 {
  "items": [
   {
    "media": "this.video_967D3503_9CFC_AE86_4181_C7F652973BDF",
    "start": "this.changeBackgroundWhilePlay(this.PlayList_95F5D527_9F77_BCDC_41D6_FD235BFA7265, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_95F5D527_9F77_BCDC_41D6_FD235BFA7265, 0, this.video_967D3503_9CFC_AE86_4181_C7F652973BDF)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid95FA4517_9F77_BCFC_41CF_271E0A51E3AAVideoPlayer)",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "minHeight": 50,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColorDirection": "vertical",
      "minWidth": 100,
      "toolTipTextShadowBlurRadius": 3,
      "progressRight": 0,
      "playbackBarHeadShadow": true,
      "progressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarLeft": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadHeight": 15,
      "progressBarOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBottom": 2,
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "progressHeight": 10,
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "id": "viewer_uid943FCDC9_9F6C_AF55_41DB_FE716CCCF87B",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingLeft": 6,
      "playbackBarHeadWidth": 6,
      "borderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "width": "100%",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBarBorderSize": 0,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "VideoPlayer",
     "id": "viewer_uid95FA4517_9F77_BCFC_41CF_271E0A51E3AAVideoPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "PlayList_95F5D527_9F77_BCDC_41D6_FD235BFA7265"
 },
 {
  "items": [
   {
    "media": "this.video_96E3526C_9F7D_752C_41D9_1BD8E4E47385",
    "start": "this.changeBackgroundWhilePlay(this.PlayList_9422CDD0_9F6C_AF73_41B3_5A1F5F61AB7C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_9422CDD0_9F6C_AF73_41B3_5A1F5F61AB7C, 0, this.video_96E3526C_9F7D_752C_41D9_1BD8E4E47385)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid943F6DCA_9F6C_AF57_41DA_53B16E88DDFFVideoPlayer)",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "minHeight": 50,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColorDirection": "vertical",
      "minWidth": 100,
      "toolTipTextShadowBlurRadius": 3,
      "progressRight": 0,
      "playbackBarHeadShadow": true,
      "progressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarLeft": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadHeight": 15,
      "progressBarOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBottom": 2,
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "progressHeight": 10,
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "id": "viewer_uid943F6DCA_9F6C_AF57_41DA_53B16E88DDFF",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingLeft": 6,
      "playbackBarHeadWidth": 6,
      "borderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "width": "100%",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBarBorderSize": 0,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "VideoPlayer",
     "id": "viewer_uid943F6DCA_9F6C_AF57_41DA_53B16E88DDFFVideoPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "PlayList_9422CDD0_9F6C_AF73_41B3_5A1F5F61AB7C"
 },
 {
  "items": [
   {
    "media": "this.video_96EB9011_9F7D_D4F5_41DB_D16351875951",
    "start": "this.changeBackgroundWhilePlay(this.PlayList_94229DD0_9F6C_AF73_41DC_57431A1B442F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_94229DD0_9F6C_AF73_41DC_57431A1B442F, 0, this.video_96EB9011_9F7D_D4F5_41DB_D16351875951)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid943F2DCB_9F6C_AF55_41D7_2B923FC7B0A5VideoPlayer)",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "minHeight": 50,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColorDirection": "vertical",
      "minWidth": 100,
      "toolTipTextShadowBlurRadius": 3,
      "progressRight": 0,
      "playbackBarHeadShadow": true,
      "progressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarLeft": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadHeight": 15,
      "progressBarOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBottom": 2,
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "progressHeight": 10,
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "id": "viewer_uid943F2DCB_9F6C_AF55_41D7_2B923FC7B0A5",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingLeft": 6,
      "playbackBarHeadWidth": 6,
      "borderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "width": "100%",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBarBorderSize": 0,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "VideoPlayer",
     "id": "viewer_uid943F2DCB_9F6C_AF55_41D7_2B923FC7B0A5VideoPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "PlayList_94229DD0_9F6C_AF73_41DC_57431A1B442F"
 },
 {
  "items": [
   {
    "media": "this.video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326",
    "start": "this.changeBackgroundWhilePlay(this.PlayList_94225DD1_9F6C_AF75_41C3_E20C121E7D11, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_94225DD1_9F6C_AF75_41C3_E20C121E7D11, 0, this.video_955F2F38_9F7C_AB34_41D0_3DCCDBAE3326)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid943CFDCC_9F6C_AF53_41B8_09CB549E22CAVideoPlayer)",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "minHeight": 50,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColorDirection": "vertical",
      "minWidth": 100,
      "toolTipTextShadowBlurRadius": 3,
      "progressRight": 0,
      "playbackBarHeadShadow": true,
      "progressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarLeft": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadHeight": 15,
      "progressBarOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBottom": 2,
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "progressHeight": 10,
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "id": "viewer_uid943CFDCC_9F6C_AF53_41B8_09CB549E22CA",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingLeft": 6,
      "playbackBarHeadWidth": 6,
      "borderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "width": "100%",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBarBorderSize": 0,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "VideoPlayer",
     "id": "viewer_uid943CFDCC_9F6C_AF53_41B8_09CB549E22CAVideoPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "PlayList_94225DD1_9F6C_AF75_41C3_E20C121E7D11"
 },
 {
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonBorderRadius": 0,
  "paddingLeft": 0,
  "minHeight": 20,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadow": true,
  "bodyPaddingTop": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonIconColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingBottom": 5,
  "bodyBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "shadowSpread": 1,
  "closeButtonBorderSize": 0,
  "closeButtonIconWidth": 20,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "close": "this.PlayList_95F52527_9F77_BCDC_41C1_A88AD81BD134.set('selectedIndex', -1);; this.resumeGlobalAudios()",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#888888",
  "id": "window_96EA203C_9F14_D52C_4180_C3572EE29D4C",
  "children": [
   "this.viewer_uid943E0DC9_9F6C_AF55_41D1_DA1E7BD49415"
  ],
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "titleFontSize": 14,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconLineWidth": 5,
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "overflow": "scroll",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titlePaddingRight": 5,
  "class": "Window",
  "closeButtonBorderColor": "#000000",
  "paddingTop": 0,
  "veilOpacity": 0.4,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonPaddingRight": 5,
  "headerPaddingLeft": 10,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonIconHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "bodyPaddingBottom": 0,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "backgroundColorRatios": [],
  "closeButtonPaddingTop": 5
 },
 "this.popup_96B39DB8_9F14_EF34_41C3_3A3EBBB59DCA",
 {
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonBorderRadius": 0,
  "paddingLeft": 0,
  "minHeight": 20,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadow": true,
  "bodyPaddingTop": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonIconColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingBottom": 5,
  "bodyBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "shadowSpread": 1,
  "closeButtonBorderSize": 0,
  "closeButtonIconWidth": 20,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "close": "this.PlayList_95F5D527_9F77_BCDC_41D6_FD235BFA7265.set('selectedIndex', -1);; this.resumeGlobalAudios()",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#888888",
  "id": "window_99AF3A6B_9F14_F554_41A9_76122DF706F0",
  "children": [
   "this.viewer_uid943FCDC9_9F6C_AF55_41DB_FE716CCCF87B"
  ],
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "titleFontSize": 14,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconLineWidth": 5,
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "overflow": "scroll",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titlePaddingRight": 5,
  "class": "Window",
  "closeButtonBorderColor": "#000000",
  "paddingTop": 0,
  "veilOpacity": 0.4,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonPaddingRight": 5,
  "headerPaddingLeft": 10,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonIconHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "bodyPaddingBottom": 0,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "backgroundColorRatios": [],
  "closeButtonPaddingTop": 5
 },
 "this.popup_9699324B_9CFD_EA86_41E0_4973EF4792C8",
 {
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonBorderRadius": 0,
  "paddingLeft": 0,
  "minHeight": 20,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadow": true,
  "bodyPaddingTop": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonIconColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingBottom": 5,
  "bodyBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "shadowSpread": 1,
  "closeButtonBorderSize": 0,
  "closeButtonIconWidth": 20,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "close": "this.PlayList_9422CDD0_9F6C_AF73_41B3_5A1F5F61AB7C.set('selectedIndex', -1);; this.resumeGlobalAudios()",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#888888",
  "id": "window_94E2056B_9F6C_BF54_41B1_CDC721D9B9EB",
  "children": [
   "this.viewer_uid943F6DCA_9F6C_AF57_41DA_53B16E88DDFF"
  ],
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "titleFontSize": 14,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconLineWidth": 5,
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "overflow": "scroll",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titlePaddingRight": 5,
  "class": "Window",
  "closeButtonBorderColor": "#000000",
  "paddingTop": 0,
  "veilOpacity": 0.4,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonPaddingRight": 5,
  "headerPaddingLeft": 10,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonIconHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "bodyPaddingBottom": 0,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "backgroundColorRatios": [],
  "closeButtonPaddingTop": 5
 },
 "this.popup_94249242_9F6C_B554_41D7_C353E51CCF11",
 {
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonBorderRadius": 0,
  "paddingLeft": 0,
  "minHeight": 20,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadow": true,
  "bodyPaddingTop": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonIconColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingBottom": 5,
  "bodyBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "shadowSpread": 1,
  "closeButtonBorderSize": 0,
  "closeButtonIconWidth": 20,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "close": "this.PlayList_94229DD0_9F6C_AF73_41DC_57431A1B442F.set('selectedIndex', -1);; this.resumeGlobalAudios()",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#888888",
  "id": "window_94937654_9F6C_DD73_41E0_990CD681ED43",
  "children": [
   "this.viewer_uid943F2DCB_9F6C_AF55_41D7_2B923FC7B0A5"
  ],
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "titleFontSize": 14,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconLineWidth": 5,
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "overflow": "scroll",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titlePaddingRight": 5,
  "class": "Window",
  "closeButtonBorderColor": "#000000",
  "paddingTop": 0,
  "veilOpacity": 0.4,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonPaddingRight": 5,
  "headerPaddingLeft": 10,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonIconHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "bodyPaddingBottom": 0,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "backgroundColorRatios": [],
  "closeButtonPaddingTop": 5
 },
 "this.popup_94DB6383_9F6C_DBD5_41DD_E436FB7C1425",
 {
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonBorderRadius": 0,
  "paddingLeft": 0,
  "minHeight": 20,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadow": true,
  "bodyPaddingTop": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonIconColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingBottom": 5,
  "bodyBackgroundOpacity": 0,
  "closeButtonPressedBorderSize": 0,
  "shadowSpread": 1,
  "closeButtonBorderSize": 0,
  "closeButtonIconWidth": 20,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "close": "this.PlayList_94225DD1_9F6C_AF75_41C3_E20C121E7D11.set('selectedIndex', -1);; this.resumeGlobalAudios()",
  "titleFontFamily": "Arial",
  "closeButtonPressedIconColor": "#888888",
  "id": "window_94B6BFF8_9F6F_AB33_41B5_9D1E9DD73BC0",
  "children": [
   "this.viewer_uid943CFDCC_9F6C_AF53_41B8_09CB549E22CA"
  ],
  "shadowBlurRadius": 6,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "titleFontSize": 14,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconLineWidth": 5,
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "headerBackgroundOpacity": 0,
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "overflow": "scroll",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titlePaddingRight": 5,
  "class": "Window",
  "closeButtonBorderColor": "#000000",
  "paddingTop": 0,
  "veilOpacity": 0.4,
  "headerBackgroundColorDirection": "vertical",
  "closeButtonPaddingRight": 5,
  "headerPaddingLeft": 10,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonIconHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingLeft": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "bodyPaddingBottom": 0,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "backgroundColorRatios": [],
  "closeButtonPaddingTop": 5
 },
 "this.popup_94E7FD1A_9F6F_ACF4_41D5_7623B45F5C17"
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "top": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "minHeight": 50,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowOpacity": 1,
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "toolTipTextShadowBlurRadius": 3,
  "progressRight": 0,
  "playbackBarHeadShadow": true,
  "progressOpacity": 1,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "maxWidth": 56,
  "horizontalAlign": "center",
  "iconURL": "skin/IconButton_9B2D4CAA_9CE4_BF81_41E2_E3BECAC43A2F.png",
  "bottom": "1.21%",
  "paddingLeft": 0,
  "minHeight": 1,
  "borderSize": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "mode": "push",
  "class": "IconButton",
  "paddingTop": 0,
  "minWidth": 1,
  "transparencyActive": false,
  "cursor": "hand",
  "paddingBottom": 0,
  "right": "1.03%",
  "width": 56,
  "height": 55,
  "backgroundOpacity": 0,
  "id": "IconButton_9B2D4CAA_9CE4_BF81_41E2_E3BECAC43A2F",
  "borderRadius": 0,
  "maxHeight": 55,
  "paddingRight": 0
 },
 {
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "top": 0,
  "bottom": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "borderSize": 0,
  "shadow": false,
  "minWidth": 0,
  "class": "UIComponent",
  "paddingTop": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0
  ],
  "paddingRight": 0
 },
 {
  "top": 0,
  "bottom": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "borderSize": 0,
  "shadow": false,
  "scaleMode": "custom",
  "minWidth": 0,
  "class": "ZoomImage",
  "paddingTop": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontSize": 12,
  "iconBeforeLabel": true,
  "label": "",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "top": 10,
  "iconHeight": 20,
  "paddingLeft": 5,
  "fontStyle": "normal",
  "minHeight": 0,
  "rollOverIconColor": "#666666",
  "borderSize": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "mode": "push",
  "minWidth": 0,
  "borderColor": "#000000",
  "class": "CloseButton",
  "fontWeight": "normal",
  "paddingTop": 5,
  "fontColor": "#FFFFFF",
  "shadowSpread": 1,
  "iconLineWidth": 5,
  "iconWidth": 20,
  "cursor": "hand",
  "pressedIconColor": "#888888",
  "paddingBottom": 5,
  "right": 10,
  "gap": 5,
  "textDecoration": "none",
  "layout": "horizontal",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "iconColor": "#000000",
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 5
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_9B2D4CAA_9CE4_BF81_41E2_E3BECAC43A2F], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "minHeight": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "unregisterKey": function(key){    delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "existsKey": function(key){    return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){    return window[key]; },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } }
 },
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 0
})