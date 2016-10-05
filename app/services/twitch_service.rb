class TwitchService

  def channels(title, limit)
    @resp = Faraday.get 'https://api.twitch.tv/kraken/streams' do |req|
      req.params["game"] = "#{title}"
      req.params["stream_type"] = "live"
      req.params["limit"] = limit
      req.headers["client-id"] = ENV["TWITCH_API"]
    end
    @result = JSON.parse(@resp.body)
  end

  def pagination(link)
    @resp = Faraday.get link do |req|
      req.headers["client-id"] = ENV["TWITCH_API"]
    end
    @result = JSON.parse(@resp.body)
  end
end