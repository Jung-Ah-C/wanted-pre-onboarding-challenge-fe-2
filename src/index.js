/**
 * @author JungAh Choi
 */

/**
 * Todo Data
 * @typedef {Object} todo
 * @property {number} id
 * @property {string} content
 * @property {boolean} isCompleted
 * @property {string} category
 * @property {string[]} tags
 */

/**
 * Todo List Data
 * @typedef {todo[]} todoList
 * @property {todo} todo
 */

/**
 * CREATE
 * todo 항목을 추가한다.
 * @param {string} content
 * @param {string} category
 * @param {boolean} isCompleted
 * @param {string[]} tags
 */
function addTodo(content, category, isCompleted, tags) {

};

/**
 * READ
 * todo 항목을 조회한다.
 * @param {number} id
 * @return {todo|todoList}
 */
function getTodo(id) {

};

/**
 * UPDATE
 * todo 항목을 수정한다.
 * @param {todo} todo
 */
function updateTodo(todo) {

};

/**
 * DELETE
 * todo 항목을 삭제한다.
 * @param {number} id
 */
function deleteTodo(id) {

};