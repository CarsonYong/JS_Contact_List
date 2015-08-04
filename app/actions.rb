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
    status 200
  else
    status 500 
  end
end

get '/contacts/:id' do
  @contact = Contact.find(params[:id])
  @contact.to_json
end

delete '/contact/:id' do
  @conact.delete(params[:id])
  status 200
end


put '/contacts/:id' do
  @contact.update(params[:id])
end 