var rbd_playlisttbl = [
  {
    file:
      "https://raw.githubusercontent.com/fcasfs-oficial-website/Fcas_FS/master/Rebelde Video 26.mp4",
    title: "Rebelde Vídeo Clipe",
    poster:
      "https://raw.githubusercontent.com/FCASfs/server/master/rebelde-poster.jpg"
  },
  {
    file:
      "https://raw.githubusercontent.com/fcasfs-oficial-website/Fcas_FS/master/RBD - Nuestro Amor (CD Completo).mp3",
    title: "RBD - Nuestro Amor (CD Completo)",
    poster: "https://raw.githubusercontent.com/FCASfs/server/master/rbd_1.jpg"
  },
  {
    file:
      "https://raw.githubusercontent.com/fcasfs-oficial-website/Fcas_FS/master/RBD - Rebelde (CD Completo - Version Mexicana).mp3",
    title: "RBD - Rebelde (CD Completo - Version Mexicana)",
    poster: "https://raw.githubusercontent.com/FCASfs/server/master/rbd_1.jpg"
  }
];

function mdpl_handleFileSelect(evt) {
  playevid_setmode_file(
    "pl-vide",
    create_mdpl_file(evt).create_url(0),
    create_mdpl_file(evt).get_name(0)
  );
}

function playevid_setmode_file(ob, f, t) {
  set_player_IconsColor("#1874CD");

  set_file_videoplayer(ob, f, t, "", "", "", "", "true");
  set_player_settings().size(ob, "80%");
  set_player_settings().position.center(ob);
  set_player_settings().version_update();

  /*set_icon_controls("");*/

  var app_plconfig_playlist = { search: false, autoplay: false };
  var app_plconfig = {
    Playlist: app_plconfig_playlist,
    Controls: true,
    Title: true
  };
  var controls_settings_buttons = {
    Icon: true,
    Speed_Control: true,
    Stop: true,
    Download: false
  };
  set_player_controls_settings(controls_settings_buttons);
  set_player_config(app_plconfig);
  set_player_settings().Button_Light(true);
}
function playevid_setmode_normal(ob) {
  var app_plconfig_playlist = { autoplay: false };
  var app_plconfig = {
    Playlist: app_plconfig_playlist,
    Controls: true,
    Title: true
  };
  var controls_settings_buttons = {
    Icon: true,
    Speed_Control: true,
    Stop: true,
    Download: false
  };
  set_player_IconsColor("#1874CD");

  set_file_videoplayer(
    ob,
    "https://raw.githubusercontent.com/fcasfs-oficial-website/Fcas_FS/master/Rebelde Video 26.mp4",
    "Rebelde Vídeo Clipe",
    "",
    "",
    "",
    "https://raw.githubusercontent.com/FCASfs/server/master/rebelde-poster.jpg",
    "true"
  );
  set_icon_controls(
    "https://raw.githubusercontent.com/FCASfs/server/master/Rebelde_logo.png"
  );
  set_player_settings().size("pl-vide", "80%");
  set_player_settings().position.center("pl-vide");
  set_player_settings().version_update();
  set_player_settings().Button_Light(true);
  set_player_controls_settings(controls_settings_buttons);
  set_player_config(app_plconfig);
}

function playevid_setmode_plalist(ob) {
  var app_plconfig_playlist = { search: true, autoplay: false };
  var app_plconfig = {
    Playlist: app_plconfig_playlist,
    Controls: true,
    Title: true
  };
  var controls_settings_buttons = {
    Icon: true,
    Speed_Control: true,
    Stop: true,
    Download: false
  };
  set_player_IconsColor("#1874CD");

  set_playlist_videoplayer("pl-vide", rbd_playlisttbl, "");
  set_icon_controls(
    "https://raw.githubusercontent.com/FCASfs/server/master/Rebelde_logo.png"
  );
  set_player_settings().size("pl-vide", "80%");
  set_player_settings().position.center("pl-vide");
  set_player_settings().version_update();
  set_player_settings().Button_Light(true);
  set_player_controls_settings(controls_settings_buttons);
  set_player_config(app_plconfig);
}

document.getElementById("inp_sle").onchange = function () {
  mdpl_handleFileSelect(this);
};

playevid_setmode_plalist("pl-vide");
