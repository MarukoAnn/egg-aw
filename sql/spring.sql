/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : spring

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 05/01/2023 18:48:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for novel_type
-- ----------------------------
DROP TABLE IF EXISTS `novel_type`;
CREATE TABLE `novel_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type_value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type_sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `type_value`(`type_value` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of novel_type
-- ----------------------------
INSERT INTO `novel_type` VALUES (25, '青春校园', '4', '2', '2023-01-05 09:05:31', '2023-01-05 09:05:31');
INSERT INTO `novel_type` VALUES (29, '古代言情', '1', '2', '2023-01-05 09:06:10', '2023-01-05 09:06:10');
INSERT INTO `novel_type` VALUES (30, '现代言情', '2', '2', '2023-01-05 09:06:18', '2023-01-05 09:06:18');
INSERT INTO `novel_type` VALUES (31, '纯爱', '3', '2', '2023-01-05 09:06:37', '2023-01-05 09:06:37');
INSERT INTO `novel_type` VALUES (32, '玄幻奇幻', '5', '2', '2023-01-05 09:06:53', '2023-01-05 09:06:53');
INSERT INTO `novel_type` VALUES (33, '武侠仙侠', '6', '2', '2023-01-05 09:07:03', '2023-01-05 09:07:03');
INSERT INTO `novel_type` VALUES (34, '科幻', '7', '2', '2023-01-05 09:07:10', '2023-01-05 09:07:10');
INSERT INTO `novel_type` VALUES (35, '游戏竞技', '8', '2', '2023-01-05 09:07:28', '2023-01-05 09:07:28');
INSERT INTO `novel_type` VALUES (36, '悬疑灵异', '9', '2', '2023-01-05 09:07:56', '2023-01-05 09:07:56');
INSERT INTO `novel_type` VALUES (37, '同人', '10', '2', '2023-01-05 09:08:04', '2023-01-05 09:08:04');
INSERT INTO `novel_type` VALUES (38, '女尊', '11', '2', '2023-01-05 09:08:16', '2023-01-05 09:08:16');
INSERT INTO `novel_type` VALUES (39, '莉莉', '12', '2', '2023-01-05 09:08:26', '2023-01-05 09:08:26');
INSERT INTO `novel_type` VALUES (40, '玄幻', '13', '1', '2023-01-05 09:08:34', '2023-01-05 09:08:34');
INSERT INTO `novel_type` VALUES (41, '奇幻', '14', '1', '2023-01-05 09:08:42', '2023-01-05 09:08:42');
INSERT INTO `novel_type` VALUES (42, '武侠', '15', '1', '2023-01-05 09:08:49', '2023-01-05 09:08:49');
INSERT INTO `novel_type` VALUES (43, '仙侠', '16', '1', '2023-01-05 09:08:58', '2023-01-05 09:08:58');
INSERT INTO `novel_type` VALUES (44, '都市', '17', '1', '2023-01-05 09:09:06', '2023-01-05 09:09:06');
INSERT INTO `novel_type` VALUES (45, '职场', '18', '1', '2023-01-05 09:09:13', '2023-01-05 09:09:13');
INSERT INTO `novel_type` VALUES (46, '历史', '19', '1', '2023-01-05 09:09:21', '2023-01-05 09:09:21');
INSERT INTO `novel_type` VALUES (47, '军事', '20', '1', '2023-01-05 09:09:31', '2023-01-05 09:09:31');
INSERT INTO `novel_type` VALUES (48, '游戏', '21', '1', '2023-01-05 09:10:02', '2023-01-05 09:10:02');
INSERT INTO `novel_type` VALUES (49, '竞技', '22', '1', '2023-01-05 09:10:09', '2023-01-05 09:10:09');
INSERT INTO `novel_type` VALUES (50, '科幻', '23', '1', '2023-01-05 09:10:15', '2023-01-05 09:10:15');
INSERT INTO `novel_type` VALUES (51, '灵异', '24', '1', '2023-01-05 09:10:25', '2023-01-05 09:10:25');
INSERT INTO `novel_type` VALUES (52, '同人', '25', '1', '2023-01-05 09:10:32', '2023-01-05 09:10:32');
INSERT INTO `novel_type` VALUES (53, '轻小说', '26', '1', '2023-01-05 09:10:40', '2023-01-05 09:10:40');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', '123456', 1);

SET FOREIGN_KEY_CHECKS = 1;
