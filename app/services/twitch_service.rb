class TwitchService

  def channels(title)
    @resp = Faraday.get 'https://api.twitch.tv/kraken/search/streams' do |req|
      req.params["query"] = '"' + "#{title}" + '"'
    end
    @result = JSON.parse(@resp.body)
  end

  def pagination(link)
    @resp = Faraday.get '#{link}'
    @result = JSON.parse(@resp.body)
  end
end