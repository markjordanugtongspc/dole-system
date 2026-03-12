<?php
require_once __DIR__ . '/config/vite.php';
require_once __DIR__ . '/config/db.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - DOLE System</title>

    <!-- Dark Mode FOUC Prevention -->
    <script>
        (function () {
            var theme = localStorage.getItem('color-theme');
            if (!theme) {
                var match = document.cookie.match(/(?:^|; )color-theme=([^;]*)/);
                theme = match ? decodeURIComponent(match[1]) : null;
            }
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        })();
    </script>

    <!-- Vite Assets -->
    <?php vite('backend/js/main.js'); ?>
</head>

<body class="min-h-screen flex bg-white dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden">
    <!-- Page Loader -->
    <div id="page-loader" class="page-loader">
        <div class="loader-spinner"></div>
    </div>

    <!-- MOBILE DRAWER (Splash Screen) -->
    <!-- inline z-index: 9999 ensures it completely layers over the password block and all other UI elements -->
    <style>
        #mobile-splash { z-index: 9999 !important; }
        
        @keyframes top-pathAnim-0 {
            0%, 100% { d: path("M 0,700 L 0,0 C 39.28,57.7 78.57,115.4 120,149 C 161.4,182.5 204.9,191.9 262,174 C 319.0,156.0 389.4,110.7 442,97 C 494.5,83.2 529.1,101.2 571,121 C 612.8,140.7 662.0,162.4 709,150 C 755.9,137.5 800.8,90.9 845,99 C 889.1,107.0 932.6,169.8 982,186 C 1031.3,202.1 1086.5,171.6 1140,167 C 1193.4,162.3 1245.2,183.5 1295,160 C 1344.7,136.4 1392.3,68.2 1440,0 L 1440,700 L 0,700 Z"); }
            25% { d: path("M 0,700 L 0,0 C 60.1,85.9 120.3,171.9 161,185 C 201.6,198.0 222.7,138.1 267,130 C 311.2,121.8 378.5,165.4 427,163 C 475.4,160.5 505.2,112.0 556,121 C 606.7,129.9 678.6,196.4 735,191 C 791.3,185.5 832.1,108.3 871,108 C 909.8,107.6 946.8,184.1 997,187 C 1047.1,189.8 1110.3,118.9 1156,120 C 1201.6,121.0 1229.6,194.0 1274,186 C 1318.3,177.9 1379.1,88.9 1440,0 L 1440,700 L 0,700 Z"); }
            50% { d: path("M 0,700 L 0,0 C 30.9,61.8 61.8,123.6 118,140 C 174.1,156.3 255.5,127.1 310,131 C 364.4,134.8 392.0,171.7 439,181 C 485.9,190.2 552.2,171.7 594,160 C 635.7,148.2 652.8,143.0 699,131 C 745.1,118.9 820.2,99.8 878,121 C 935.7,142.1 976.0,203.4 1024,192 C 1071.9,180.5 1127.4,96.3 1174,69 C 1220.5,41.6 1258.1,71.0 1301,69 C 1343.8,66.9 1391.9,33.4 1440,0 L 1440,700 L 0,700 Z"); }
            75% { d: path("M 0,700 L 0,0 C 44.1,49.2 88.3,98.5 142,130 C 195.6,161.4 258.6,175.0 313,172 C 367.3,168.9 412.9,149.3 448,128 C 483.0,106.6 507.3,83.5 557,83 C 606.6,82.4 681.5,104.5 737,114 C 792.4,123.4 828.3,120.2 867,123 C 905.6,125.7 947.0,134.6 1002,124 C 1056.9,113.3 1125.4,83.3 1172,96 C 1218.5,108.6 1243.0,163.8 1284,155 C 1324.9,146.1 1382.4,73.0 1440,0 L 1440,700 L 0,700 Z"); }
        }
        @keyframes top-pathAnim-1 {
            0%, 100% { d: path("M 0,700 L 0,0 C 62.0,141.1 124.0,282.2 168,327 C 211.9,371.7 237.7,320.1 286,292 C 334.2,263.8 404.7,259.2 455,266 C 505.2,272.7 535.1,290.9 582,307 C 628.8,323.0 692.6,337.1 737,331 C 781.3,324.8 806.0,298.5 853,296 C 899.9,293.4 968.9,314.8 1029,322 C 1089.0,329.1 1140.1,322.1 1177,316 C 1213.8,309.8 1236.5,304.5 1278,252 C 1319.4,199.4 1379.7,99.7 1440,0 L 1440,700 L 0,700 Z"); }
            25% { d: path("M 0,700 L 0,0 C 62.2,105.0 124.4,210.0 162,247 C 199.5,283.9 212.3,252.7 262,255 C 311.6,257.2 398.0,293.0 450,309 C 501.9,324.9 519.2,320.9 553,329 C 586.7,337.0 636.7,357.2 696,364 C 755.2,370.7 823.5,363.9 870,351 C 916.4,338.0 940.8,318.7 988,296 C 1035.1,273.2 1105.0,246.8 1156,259 C 1206.9,271.1 1238.8,321.7 1283,285 C 1327.1,248.2 1383.5,124.1 1440,0 L 1440,700 L 0,700 Z"); }
            50% { d: path("M 0,700 L 0,0 C 51.9,116.7 103.8,233.5 148,272 C 192.1,310.4 228.5,270.5 280,247 C 331.4,223.4 397.8,216.2 442,254 C 486.1,291.7 507.9,374.4 553,367 C 598.0,359.5 666.1,261.9 713,251 C 759.8,240.0 785.2,315.6 838,333 C 890.7,350.3 970.8,309.5 1030,293 C 1089.1,276.4 1127.2,284.1 1162,308 C 1196.7,331.8 1228.2,371.6 1274,323 C 1319.7,274.3 1379.8,137.1 1440,0 L 1440,700 L 0,700 Z"); }
            75% { d: path("M 0,700 L 0,0 C 52.1,138.1 104.3,276.2 150,338 C 195.6,399.7 234.7,385.0 283,359 C 331.2,332.9 388.6,295.5 444,294 C 499.3,292.4 552.7,326.6 601,335 C 649.2,343.3 692.4,325.9 727,316 C 761.5,306.0 787.4,303.5 840,314 C 892.5,324.4 971.8,348.0 1026,337 C 1080.1,325.9 1109.1,280.4 1157,272 C 1204.8,263.5 1271.6,292.1 1322,253 C 1372.3,213.8 1406.1,106.9 1440,0 L 1440,700 L 0,700 Z"); }
        }
        @keyframes top-pathAnim-2 {
            0%, 100% { d: path("M 0,700 L 0,0 C 57.9,219.1 115.8,438.3 157,519 C 198.1,599.6 222.4,541.9 268,502 C 313.5,462.0 380.4,440.0 438,430 C 495.5,419.9 543.6,421.8 580,428 C 616.3,434.1 641.0,444.7 694,454 C 746.9,463.2 828.0,471.3 881,491 C 933.9,510.6 958.5,541.9 1005,530 C 1051.4,518.0 1119.6,463.0 1174,471 C 1228.3,478.9 1268.9,549.9 1311,482 C 1353.0,414.0 1396.5,207.0 1440,0 L 1440,700 L 0,700 Z"); }
            25% { d: path("M 0,700 L 0,0 C 57.5,171.0 115.1,342.1 164,420 C 212.8,497.8 252.9,482.6 295,469 C 337.0,455.3 381.0,443.3 424,447 C 466.9,450.6 508.7,469.8 566,470 C 623.2,470.1 695.7,451.3 740,453 C 784.2,454.6 800.2,476.9 848,483 C 895.7,489.0 975.2,479.0 1033,482 C 1090.7,484.9 1126.7,500.9 1163,529 C 1199.2,557.0 1235.7,597.1 1282,511 C 1328.2,424.8 1384.1,212.4 1440,0 L 1440,700 L 0,700 Z"); }
            50% { d: path("M 0,700 L 0,0 C 35.3,218.6 70.6,437.2 117,514 C 163.3,590.7 220.7,525.5 275,487 C 329.2,448.4 380.4,436.3 431,457 C 481.5,477.6 531.4,530.9 571,543 C 610.5,555.0 639.8,526.0 694,489 C 748.1,451.9 827.3,407.0 885,420 C 942.6,432.9 978.7,503.8 1020,529 C 1061.2,554.1 1107.4,533.6 1148,533 C 1188.5,532.3 1223.2,551.5 1271,466 C 1318.7,380.4 1379.3,190.2 1440,0 L 1440,700 L 0,700 Z"); }
            75% { d: path("M 0,700 L 0,0 C 31.9,216.8 63.9,433.7 120,522 C 176.0,610.2 256.0,570.0 310,543 C 363.9,515.9 391.9,502.1 437,505 C 482.0,507.8 544.2,527.2 597,512 C 649.7,496.7 693.1,446.7 734,434 C 774.8,421.2 813.3,445.7 854,475 C 894.6,504.2 937.4,538.2 992,535 C 1046.5,531.7 1112.7,491.1 1160,482 C 1207.2,472.8 1235.4,495.0 1279,420 C 1322.5,344.9 1381.2,172.4 1440,0 L 1440,700 L 0,700 Z"); }
        }
        
        @keyframes bot-pathAnim-0 {
            0%, 100% { d: path("M 0,700 L 0,131 C 33.9,86.4 67.8,41.9 118,69 C 168.1,96.0 234.6,194.6 285,232 C 335.3,269.3 369.6,245.3 423,244 C 476.3,242.6 548.9,263.7 598,291 C 647.0,318.2 672.6,351.5 709,381 C 745.3,410.4 792.5,436.2 845,463 C 897.4,489.7 955.2,517.6 1000,543 C 1044.7,568.3 1076.5,591.0 1127,629 C 1177.4,666.9 1246.7,719.9 1302,752 C 1357.2,784.0 1398.6,795.0 1440,806 L 1440,700 L 0,700 Z"); }
            25% { d: path("M 0,700 L 0,131 C 56.3,133.0 112.6,135.0 165,163 C 217.3,190.9 265.6,244.9 310,268 C 354.3,291.0 394.8,283.0 434,305 C 473.1,326.9 510.8,378.7 559,415 C 607.1,451.2 665.6,471.9 722,470 C 778.3,468.0 832.4,443.3 881,449 C 929.5,454.6 972.5,490.6 1021,544 C 1069.4,597.3 1123.3,667.8 1174,690 C 1224.6,712.1 1272.1,685.7 1316,697 C 1359.8,708.2 1399.9,757.1 1440,806 L 1440,700 L 0,700 Z"); }
            50% { d: path("M 0,700 L 0,131 C 54.2,150.8 108.5,170.6 156,174 C 203.4,177.3 244.2,164.0 287,182 C 329.7,199.9 374.6,249.0 426,283 C 477.3,316.9 535.2,335.8 585,368 C 634.7,400.1 676.4,445.3 724,451 C 771.5,456.6 824.8,422.5 878,444 C 931.1,465.4 984.1,542.5 1026,596 C 1067.8,649.4 1098.4,679.1 1137,691 C 1175.5,702.8 1222.1,696.8 1274,713 C 1325.8,729.1 1382.9,767.5 1440,806 L 1440,700 L 0,700 Z"); }
            75% { d: path("M 0,700 L 0,131 C 64.4,128.2 128.9,125.4 168,146 C 207.0,166.5 220.8,210.4 265,218 C 309.1,225.5 383.8,196.5 436,236 C 488.1,275.4 517.6,383.1 566,414 C 614.3,444.8 681.3,398.6 725,398 C 768.6,397.3 788.9,442.0 838,487 C 887.0,531.9 964.9,576.9 1019,614 C 1073.0,651.0 1103.2,680.0 1140,710 C 1176.7,739.9 1219.9,770.8 1271,787 C 1322.0,803.1 1381.0,804.5 1440,806 L 1440,700 L 0,700 Z"); }
        }
        @keyframes bot-pathAnim-1 {
            0%, 100% { d: path("M 0,700 L 0,306 C 40.1,270.2 80.3,234.4 125,259 C 169.6,283.5 218.6,368.2 265,423 C 311.3,477.7 355.1,502.3 412,518 C 468.8,533.6 538.9,540.4 592,561 C 645.0,581.5 681.2,616.0 721,636 C 760.7,655.9 804.2,661.3 847,687 C 889.7,712.6 931.8,758.7 982,771 C 1032.1,783.2 1090.4,761.8 1150,780 C 1209.5,798.1 1270.4,855.9 1319,896 C 1367.5,936.0 1403.7,958.5 1440,981 L 1440,700 L 0,700 Z"); }
            25% { d: path("M 0,700 L 0,306 C 48.5,275.0 97.0,244.1 146,260 C 194.9,275.8 244.1,338.4 293,365 C 341.8,391.5 390.2,381.9 433,392 C 475.7,402.0 512.8,431.6 554,494 C 595.1,556.3 640.3,651.2 698,667 C 755.6,682.7 825.8,619.2 875,623 C 924.1,626.7 952.3,697.7 1005,758 C 1057.6,818.2 1134.6,867.7 1178,876 C 1221.3,884.2 1230.9,851.3 1269,862 C 1307.0,872.6 1373.5,926.8 1440,981 L 1440,700 L 0,700 Z"); }
            50% { d: path("M 0,700 L 0,306 C 41.5,296.7 83.1,287.4 136,297 C 188.8,306.5 252.8,334.9 299,379 C 345.1,423.0 373.5,482.8 418,506 C 462.4,529.1 522.9,515.5 573,517 C 623.0,518.4 662.4,534.7 705,572 C 747.5,609.2 793.1,667.4 851,708 C 908.8,748.5 978.8,771.4 1034,795 C 1089.1,818.5 1129.5,842.8 1167,876 C 1204.4,909.1 1238.9,951.0 1284,970 C 1329.0,988.9 1384.5,984.9 1440,981 L 1440,700 L 0,700 Z"); }
            75% { d: path("M 0,700 L 0,306 C 61.6,297.9 123.3,289.9 166,292 C 208.6,294.0 232.4,306.2 281,326 C 329.5,345.7 403.0,373.0 455,421 C 506.9,468.9 537.5,537.7 578,559 C 618.4,580.2 668.7,554.0 715,560 C 761.2,565.9 803.5,603.9 845,663 C 886.4,722.0 927.0,802.1 985,815 C 1042.9,827.8 1118.2,773.6 1175,782 C 1231.7,790.3 1269.9,861.3 1311,905 C 1352.0,948.6 1396.0,964.8 1440,981 L 1440,700 L 0,700 Z"); }
        }
        @keyframes bot-pathAnim-2 {
            0%, 100% { d: path("M 0,700 L 0,481 C 52.6,442.8 105.2,404.6 151,420 C 196.7,435.3 235.6,504.2 276,536 C 316.3,567.7 358.1,562.2 413,593 C 467.8,623.7 535.7,690.7 584,739 C 632.2,787.2 660.9,816.6 700,822 C 739.0,827.3 788.5,808.6 851,827 C 913.4,845.3 988.8,900.7 1032,920 C 1075.1,939.2 1086.0,922.2 1129,956 C 1171.9,989.7 1246.8,1074.2 1304,1116 C 1361.1,1157.7 1400.5,1156.8 1440,1156 L 1440,700 L 0,700 Z"); }
            25% { d: path("M 0,700 L 0,481 C 57.9,438.1 115.8,395.2 166,419 C 216.1,442.7 258.6,533.2 303,585 C 347.3,636.7 393.6,649.7 443,645 C 492.3,640.2 544.6,617.6 583,643 C 621.3,668.3 645.6,741.6 694,784 C 742.3,826.3 814.5,837.6 870,866 C 925.4,894.3 964.0,939.8 1012,974 C 1059.9,1008.1 1117.2,1031.0 1160,1060 C 1202.7,1088.9 1230.7,1123.9 1275,1141 C 1319.2,1158.0 1379.6,1157.0 1440,1156 L 1440,700 L 0,700 Z"); }
            50% { d: path("M 0,700 L 0,481 C 48.8,466.1 97.6,451.3 141,482 C 184.3,512.6 222.1,588.7 266,600 C 309.8,611.2 359.7,557.6 415,571 C 470.2,584.3 530.8,664.6 589,713 C 647.1,761.3 702.7,777.7 743,798 C 783.2,818.2 808.2,842.2 846,855 C 883.7,867.7 934.1,869.2 988,900 C 1041.8,930.7 1099.2,990.5 1148,1021 C 1196.7,1051.4 1236.7,1052.4 1284,1070 C 1331.2,1087.5 1385.6,1121.7 1440,1156 L 1440,700 L 0,700 Z"); }
            75% { d: path("M 0,700 L 0,481 C 40.1,454.9 80.3,428.9 135,439 C 189.6,449.0 258.6,495.2 309,546 C 359.3,596.7 390.9,651.9 430,660 C 469.0,668.0 515.4,628.7 561,642 C 606.5,655.2 651.1,721.0 698,766 C 744.8,810.9 793.7,834.9 852,864 C 910.2,893.0 977.6,926.9 1026,941 C 1074.3,955.0 1103.6,949.1 1150,988 C 1196.3,1026.8 1259.8,1110.5 1311,1146 C 1362.1,1181.4 1401.0,1168.7 1440,1156 L 1440,700 L 0,700 Z"); }
        }

        .local-animate-top-0 { animation: top-pathAnim-0 12s linear infinite; }
        .local-animate-top-1 { animation: top-pathAnim-1 9s linear infinite; }
        .local-animate-top-2 { animation: top-pathAnim-2 7s linear infinite; }
        .local-animate-bot-0 { animation: bot-pathAnim-0 12s linear infinite; }
        .local-animate-bot-1 { animation: bot-pathAnim-1 9s linear infinite; }
        .local-animate-bot-2 { animation: bot-pathAnim-2 7s linear infinite; }
    </style>
    <div id="mobile-splash" class="lg:hidden fixed inset-0 bg-white dark:bg-slate-900 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]" style="z-index: 9999;">

        
        <!-- TOP WAVE SVG (Inlined & Animated via inline style) -->
        <div class="absolute top-0 left-0 w-full leading-none z-0 opacity-80 scale-110">
            <svg viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto transition duration-300 ease-in-out rotate-180">
                <path d="M 0,700 L 0,0 C 39.28,57.7 78.57,115.4 120,149 C 161.4,182.5 204.9,191.9 262,174 C 319.0,156.0 389.4,110.7 442,97 C 494.5,83.2 529.1,101.2 571,121 C 612.8,140.7 662.0,162.4 709,150 C 755.9,137.5 800.8,90.9 845,99 C 889.1,107.0 932.6,169.8 982,186 C 1031.3,202.1 1086.5,171.6 1140,167 C 1193.4,162.3 1245.2,183.5 1295,160 C 1344.7,136.4 1392.3,68.2 1440,0 L 1440,700 L 0,700 Z" 
                    fill="#0099ff" fill-opacity="0.3" class="local-animate-top-0"></path>
                <path d="M 0,700 L 0,0 C 62.0,141.1 124.0,282.2 168,327 C 211.9,371.7 237.7,320.1 286,292 C 334.2,263.8 404.7,259.2 455,266 C 505.2,272.7 535.1,290.9 582,307 C 628.8,323.0 692.6,337.1 737,331 C 781.3,324.8 806.0,298.5 853,296 C 899.9,293.4 968.9,314.8 1029,322 C 1089.0,329.1 1140.1,322.1 1177,316 C 1213.8,309.8 1236.5,304.5 1278,252 C 1319.4,199.4 1379.7,99.7 1440,0 L 1440,700 L 0,700 Z" 
                    fill="#0099ff" fill-opacity="0.5" class="local-animate-top-1"></path>
                <path d="M 0,700 L 0,0 C 57.9,219.1 115.8,438.3 157,519 C 198.1,599.6 222.4,541.9 268,502 C 313.5,462.0 380.4,440.0 438,430 C 495.5,419.9 543.6,421.8 580,428 C 616.3,434.1 641.0,444.7 694,454 C 746.9,463.2 828.0,471.3 881,491 C 933.9,510.6 958.5,541.9 1005,530 C 1051.4,518.0 1119.6,463.0 1174,471 C 1228.3,478.9 1268.9,549.9 1311,482 C 1353.0,414.0 1396.5,207.0 1440,0 L 1440,700 L 0,700 Z" 
                    fill="#0099ff" fill-opacity="1" class="local-animate-top-2"></path>
            </svg>
        </div>

        <!-- NEW BOTTOM WAVE SVG (Animated via inline style) -->
        <div class="absolute bottom-0 left-0 w-full leading-none z-0 scale-110">
            <svg viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto transition duration-300 ease-in-out">
                <path d="M 0,700 L 0,131 C 33.9,86.4 67.8,41.9 118,69 C 168.1,96.0 234.6,194.6 285,232 C 335.3,269.3 369.6,245.3 423,244 C 476.3,242.6 548.9,263.7 598,291 C 647.0,318.2 672.6,351.5 709,381 C 745.3,410.4 792.5,436.2 845,463 C 897.4,489.7 955.2,517.6 1000,543 C 1044.7,568.3 1076.5,591.0 1127,629 C 1177.4,666.9 1246.7,719.9 1302,752 C 1357.2,784.0 1398.6,795.0 1440,806 L 1440,700 L 0,700 Z" 
                    fill="#0099ff" fill-opacity="0.3" class="local-animate-bot-0"></path>
                <path d="M 0,700 L 0,306 C 40.1,270.2 80.3,234.4 125,259 C 169.6,283.5 218.6,368.2 265,423 C 311.3,477.7 355.1,502.3 412,518 C 468.8,533.6 538.9,540.4 592,561 C 645.0,581.5 681.2,616.0 721,636 C 760.7,655.9 804.2,661.3 847,687 C 889.7,712.6 931.8,758.7 982,771 C 1032.1,783.2 1090.4,761.8 1150,780 C 1209.5,798.1 1270.4,855.9 1319,896 C 1367.5,936.0 1403.7,958.5 1440,981 L 1440,700 L 0,700 Z" 
                    fill="#0099ff" fill-opacity="0.5" class="local-animate-bot-1"></path>
                <path d="M 0,700 L 0,481 C 52.6,442.8 105.2,404.6 151,420 C 196.7,435.3 235.6,504.2 276,536 C 316.3,567.7 358.1,562.2 413,593 C 467.8,623.7 535.7,690.7 584,739 C 632.2,787.2 660.9,816.6 700,822 C 739.0,827.3 788.5,808.6 851,827 C 913.4,845.3 988.8,900.7 1032,920 C 1075.1,939.2 1086.0,922.2 1129,956 C 1171.9,989.7 1246.8,1074.2 1304,1116 C 1361.1,1157.7 1400.5,1156.8 1440,1156 L 1440,700 L 0,700 Z" 
                    fill="#0099ff" fill-opacity="1" class="local-animate-bot-2"></path>
            </svg>
        </div>

        <!-- SPLASH CONTENT (Scrollable/Expandable & Fixed Overlap) -->
        <div class="relative z-10 flex flex-col h-full overflow-y-auto px-4 md:px-8 py-8">
            <!-- Headers (Left-aligned, Enhanced Visibility) -->
            <div class="pt-8 mb-4 text-left w-full pl-4">
                <h1 class="text-3xl sm:text-2xl font-black text-royal-blue dark:text-blue-400 leading-tight uppercase tracking-tight whitespace-nowrap">DOLE-GIP</h1>
                <p class="text-[11px] sm:text-[10px] font-bold text-slate-700 dark:text-slate-300 mt-1 uppercase tracking-widest whitespace-nowrap">Republic of the Philippines</p>
                <p class="text-[9px] sm:text-[8px] font-black text-white bg-royal-blue/90 dark:bg-blue-600/90 px-2 py-1 inline-block rounded uppercase tracking-widest shadow-sm mt-1.5 backdrop-blur-md">Department of Labor and Employment</p>
            </div>

            <!-- Logo Container (Middle Center, No circle outline) -->
            <div class="grow flex items-center justify-center relative my-12">
                <div class="relative w-64 h-64 sm:w-56 sm:h-56 flex items-center justify-center z-10">
                    <div class="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <img src="frontend/images/logo/doleiligan.png" alt="DOLE Logo" class="w-48 h-48 sm:w-40 sm:h-40 object-contain opacity-35 drop-shadow-2xl">
                </div>
            </div>

            <!-- Action Buttons (Positioned higher, fully visible) -->
            <div class="flex flex-col gap-4 mb-48 sm:mb-40 relative z-20 w-full max-w-xs mx-auto">
                <button id="show-login-btn" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-xl shadow-lg transition-all text-xs uppercase tracking-[0.2em] active:scale-[0.97]">
                    Login
                </button>
                <button id="forgot-password-splash-btn" class="w-full text-red-500 hover:bg-red-500/5 font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-[0.15em] border border-red-500/10 active:scale-[0.97]">
                    Forgot Password
                </button>
            </div>
        </div>
    </div>

    <!-- DESKTOP DESIGN (Untouched) -->
    
    <!-- LEFT PANEL - Brand Panel (Desktop) -->
    <div id="left-panel" class="hidden lg:flex lg:w-1/2 bg-royal-blue dark:bg-slate-900 transition-colors duration-300 items-center justify-center p-12">
        <div id="left-panel-content" class="text-center max-w-md">
            <div id="left-panel-logo" class="mb-10">
                <div class="w-56 h-56 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center p-6 border-4 border-white/10 overflow-hidden">
                    <img src="frontend/images/logo/doleiligan.png" alt="DOLE Logo" class="w-full h-full object-contain rounded-full drop-shadow-2xl">
                </div>
            </div>
            <h1 class="text-4xl font-bold text-white mb-4 tracking-tight">DOLE System</h1>
            <p class="text-lg text-white/90 font-medium tracking-wide">Department of Labor and Employment</p>
            <p class="text-xs text-golden-yellow mt-4 font-bold uppercase tracking-[0.2em]">Republic of the Philippines</p>
        </div>
    </div>

        <!-- Back Button for Mobile (Light Red in light mode) -->
        <button id="back-to-splash" class="lg:hidden absolute top-6 left-3 text-red-400 hover:text-red-500 dark:text-red-500 transition-colors p-2 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>

        <div id="right-panel-content" class="w-full max-w-md lg:max-w-md mx-auto">
            <!-- Mobile Logo Section (Branding text commented out) -->
            <div class="lg:hidden text-center mb-6">
                <div class="w-32 h-32 mx-auto mb-4 relative aspect-square rounded-full border border-blue-500/10">
                    <div class="absolute inset-0 bg-royal-blue/5 rounded-full blur-2xl animate-pulse"></div>
                    <img src="frontend/images/logo/doleiligan.png" alt="DOLE Logo" class="w-full h-full object-contain relative z-10 rounded-full">
                </div>
                <!--
                <h2 class="text-3xl font-black text-royal-blue dark:text-blue-400 uppercase tracking-tight">DOLE System</h2>
                <p class="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Republic of the Philippines</p>
                <p class="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-1">Department of Labor and Employment</p>
                -->
            </div>

            <!-- Login Form (Container removed for mobile as per ref) -->
            <div class="lg:bg-white lg:dark:bg-slate-800 lg:rounded-2xl lg:shadow-xl lg:border lg:border-gray-200 lg:dark:border-slate-700 lg:p-10 transition-all duration-300">
                <div class="mb-10 text-center lg:text-left">
                    <h2 class="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Welcome Back!</h2>
                    <p class="text-base text-gray-600 dark:text-slate-400 font-medium">Sign in to access your administrative tools and services.</p>
                </div>
                <form id="loginForm" class="space-y-6">
                    <div class="w-full">
                        <label for="username" class="block text-xs font-black text-gray-700 dark:text-slate-300 mb-2 uppercase tracking-[0.1em]">Email address or Username*</label>
                        <input type="text" id="username" name="username" required class="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-royal-blue focus:ring-4 focus:ring-blue-100/50 transition-all outline-none text-base font-semibold shadow-sm" placeholder="Enter your username" />
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center mb-2">
                            <label for="password" class="block text-xs font-black text-gray-700 dark:text-slate-300 uppercase tracking-[0.1em]">Password*</label>
                        </div>
                        <div class="relative">
                            <input type="password" id="password" name="password" required class="w-full px-5 py-4 pr-14 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-royal-blue focus:ring-4 focus:ring-blue-100/50 transition-all outline-none text-base font-semibold shadow-sm" placeholder="Enter your password" />
                            <button type="button" id="togglePassword" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-royal-blue dark:text-slate-500 transition-colors">
                                <svg class="eye-open w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                <svg class="eye-closed w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-2 px-1">
                        <div class="flex items-center">
                            <input type="checkbox" id="rememberMe" name="rememberMe" class="w-5 h-5 rounded border-gray-300 text-royal-blue focus:ring-blue-100 cursor-pointer" />
                            <label for="rememberMe" class="ml-3 text-sm font-bold text-gray-700 dark:text-slate-400 cursor-pointer">Remember me</label>
                        </div>
                        <a href="#" id="forgot-password-link" class="text-sm font-black text-royal-blue hover:text-blue-700 transition-colors uppercase tracking-tight">Forgot password?</a>
                    </div>
                    <button type="submit" class="w-full bg-royal-blue text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-all shadow-xl active:scale-[0.98] uppercase tracking-[0.1em] text-sm mt-4">Sign in</button>
                </form>
            </div>
        </div>
    </div>

    <!-- SCRIPTS MOVED TO MAIN.JS -->
</body>

</html>