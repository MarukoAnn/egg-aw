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

 Date: 27/12/2022 17:02:46
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
  `type_value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type_sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '性别分类',
  `create_time` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `type_value`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of novel_type
-- ----------------------------
INSERT INTO `novel_type` VALUES (1, '玄幻', '1', '1', '2022-12-27 16:04:16');
INSERT INTO `novel_type` VALUES (3, '修真', '2', '1', '2022-12-27 16:57:04');
INSERT INTO `novel_type` VALUES (4, '武侠', '3', '1', NULL);
INSERT INTO `novel_type` VALUES (5, '仙侠', '4', '1', '2022-12-27 16:57:01');

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
