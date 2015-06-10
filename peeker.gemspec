$:.push File.expand_path("../lib", __FILE__)

require "peeker/version"

Gem::Specification.new do |s|
  s.name        = "peeker"
  s.version     = Peeker::VERSION
  s.authors     = ["frozenfung"]
  s.email       = ["fung@thepolydice.com"]
  s.homepage    = "https://github.com/polydice/peeker"
  s.summary     = "Enhance peek's elasticity."
  s.description = "A Javascript and CSS plugin to enhance peek."

  s.files = `git ls-files`.split("\n")
end
