# Homepage (Root path)
get '/' do
  erb :index
end


get '/contacts' do
  content_type :json
  Contact.all.to_json
end

post '/contacts' do
  @contact = Contact.new(params[:contact])
  if @contact.save 
    # status 200
    content_type :json
    @contact.to_json
  else
    status 500 
  end
end

get '/contacts/:id' do
  @contact = Contact.find(params[:id])
  content_type :json
    @contact.to_json
end

delete '/contacts/:id' do
  Contact.delete(params[:id])
  status 200
end


put '/contacts/:id' do
  @contact.update(params[:id])
end 