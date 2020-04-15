const express = require('express');
const router = express.Router();


const attendanceController = require('../controllers/attendance.controller');


/**
 * @route POST /attendances
 * @group Attendances - Operations about attendance
* @param {object} object.body.required - the new attendance
 * @returns {object} 200 - An array of attendances
 * @returns {Error}  default - Unexpected error
 */

router.post('/attendances', attendanceController.insert);


/**
 * @route GET /attendances
 * @group Attendances - Operations about attendance
 * @returns {object} 200 - An attendance object
 * @returns {Error}  default - Unexpected error
 */
router.get('/attendances', attendanceController.list);


/**
 * @route GET /attendances/:id
  * @param {string} id.query.required - the new attendance
 * @group Attendances
 * @returns {object} 200 - An attendance object
 * @returns {Error}  default - Unexpected error
 */
router.get('/attendances/:id', attendanceController.getById);


/**
 * @route PUT /attendances/:id
 * @param {string} id.query.required - the new attendance
* @param {object} object.body.required - the new attendance
 * @group Attendances - Operations about attendance
 * @returns {object} 200 - An attendance object
 * @returns {Error}  default - Unexpected error
 */
router.put('/attendances/:id', attendanceController.update);


/**
 * This function comment is parsed by doctrine
 * @route DELETE /attendances/{params.id}
 * @param {string} id.params.required - the attendance id
 * @group Attendances - Operations about attendance
 * @returns {object} 200 - An attendance object
 * @returns {Error}  default - Unexpected error
 */
router.delete('/attendances/:id', attendanceController.remove);

module.exports = router;
