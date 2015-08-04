class Contact < ActiveRecord::Base
  has_one :user 
  #validates :first_name, presence: true
  #validates :last_name, presence: true
 # validates :telephone, presence: true, format:{with: /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?)/}
  #validates :email, presence: true, uniqueness: true, format: {with: /(\w+\.?\w+@\w+\.\w+)/, message: 'is not a valid email'}

end