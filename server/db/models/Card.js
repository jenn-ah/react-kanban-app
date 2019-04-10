const bookshelf = require('./bookshelf');
require('./Priority');
require('./Status');
require('./User');

class Card extends bookshelf.Model {

  get tableName() { return 'cards'; }
  get hasTimestamps() { return true; }

  createdBy() {
    return this.hasOne('User', 'id', 'created_by');
  }

  assignedTo() {
    return this.hasOne('User', 'id', 'assigned_to');
  }

  priority() {
    return this.hasOne('Priority','id', 'priority_id');
  }

  status() {
    return this.hasOne('Status', 'id', 'status_id');
  }
}

module.exports = bookshelf.model('Card', Card);